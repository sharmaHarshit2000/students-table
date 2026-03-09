import { useEffect, useState } from "react";
import type { Student } from "../types";

interface StudentFormProps {
  onAdd: (student: Omit<Student, "id">) => void;
  editing: Student | null;
  onUpdate: (student: Student) => void;
}

function StudentForm({
  onAdd,
  editing,
  onUpdate,
}: StudentFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
  });

  useEffect(() => {
    if (editing) {
      setForm({
        name: editing.name,
        email: editing.email,
        age: String(editing.age),
      });
    }
  }, [editing]);

  const validateEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.age) {
      alert("All fields are required");
      return;
    }

    if (!validateEmail(form.email)) {
      alert("Invalid email format");
      return;
    }

    const payload = {
      name: form.name,
      email: form.email,
      age: Number(form.age),
    };

    if (editing) {
      onUpdate({ ...payload, id: editing.id });
    } else {
      onAdd(payload);
    }

    setForm({
      name: "",
      email: "",
      age: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-4 mb-8 items-center bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-100"
    >
      <input
        type="text"
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="flex-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
      />

      <input
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="flex-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
      />

      <input
        type="number"
        placeholder="Age"
        value={form.age}
        onChange={(e) => setForm({ ...form, age: e.target.value })}
        className="flex-1 w-full sm:w-24 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
      />

      <button
        type="submit"
        className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
      >
        {editing ? "Update Student" : "Add Student"}
      </button>
    </form>
  );
}

export default StudentForm;