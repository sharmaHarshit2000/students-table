import { useEffect, useState } from "react";
import StudentForm from "./components/StudentForm.tsx";
import StudentTable from "./components/StudentTable.tsx";
import { getStudents, addStudent, updateStudent, deleteStudent } from "./services/studentService";
import type { Student } from "./types";

function App() {

  const [students, setStudents] = useState<Student[]>([]);
  const [editing, setEditing] = useState<Student | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchStudents = async () => {
    setLoading(true);
    try {
      const res: any = await getStudents();
      setStudents(res.data);
    } catch (error) {
      console.error("Error fetching students", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleAdd = async (student: Student) => {
    await addStudent(student);
    fetchStudents();
  };

  const handleUpdate = async (student: Student) => {
    if (student.id) {
      await updateStudent(student.id, student);
      setEditing(null);
      fetchStudents();
    }
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete?")) {
      await deleteStudent(id);
      fetchStudents();
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-xl mt-10">

      <h1 className="text-3xl font-bold text-gray-800 text-center mb-8">Students Management</h1>

      <StudentForm
        onAdd={handleAdd}
        editing={editing}
        onUpdate={handleUpdate}
      />

      {loading ? (
        <p className="text-center text-gray-500 my-8">Loading students...</p>
      ) : (
        <StudentTable
          students={students}
          setEditing={setEditing}
          onDelete={handleDelete}
        />
      )}

    </div>
  );
}

export default App;