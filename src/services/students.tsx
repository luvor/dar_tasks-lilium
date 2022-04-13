import { api } from "../api";
import { Student } from "../types";

export const getStudents = async () => {
  const res = await api.get<Student[]>(`/students`);
  return res.data;
};
export const getStudent = async (id: string) => {
  const res = await api.get<Student>(`/students/${id}`);
  return res.data;
};
export const createStudent = async (data: Partial<Student>) => {
  const res = await api.post<Student>(`/students`, data);
  return res.data;
};
