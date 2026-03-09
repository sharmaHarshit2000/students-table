import axios from "axios";
import type { Student } from "../types";

const API = `${import.meta.env.VITE_API_URL}/students`;

const getLocalStudents = (): Student[] => {
  const data = localStorage.getItem("students");
  return data ? JSON.parse(data) : [];
};

const saveLocalStudents = (students: Student[]) => {
  localStorage.setItem("students", JSON.stringify(students));
};

const simulateDelay = <T>(promise: Promise<T>): Promise<T> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(promise);
    }, 800);
  });
};

export const getStudents = () => {
  return simulateDelay(
    axios.get(API).catch((error) => {
      console.warn("Backend offline. Falling back to local storage.", error.message);
      return { data: getLocalStudents() };
    })
  );
};

export const addStudent = (data: Student) => {
  return simulateDelay(
    axios.post(API, data).catch((error) => {
      console.warn("Backend offline. Falling back to local storage.", error.message);
      const students = getLocalStudents();
      const newStudent = { ...data, id: Date.now() };
      students.push(newStudent);
      saveLocalStudents(students);
      return { data: newStudent };
    })
  );
};

export const updateStudent = (id: number, data: Student) => {
  return simulateDelay(
    axios.put(`${API}/${id}`, data).catch((error) => {
      console.warn("Backend offline. Falling back to local storage.", error.message);
      let students = getLocalStudents();
      students = students.map((s) => (s.id === id ? { ...s, ...data } : s));
      saveLocalStudents(students);
      return { data };
    })
  );
};

export const deleteStudent = (id: number) => {
  return simulateDelay(
    axios.delete(`${API}/${id}`).catch((error) => {
      console.warn("Backend offline. Falling back to local storage.", error.message);
      let students = getLocalStudents();
      students = students.filter((s) => s.id !== id);
      saveLocalStudents(students);
      return { data: null };
    })
  );
};
