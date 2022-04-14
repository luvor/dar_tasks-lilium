import { api } from "./api";
import { Faculty } from "../types";

export const getFaculties = async () => {
  const res = await api.get<Faculty[]>(`/faculties`);
  return res.data;
};
export const getFaculty = async (id: string) => {
  const res = await api.get<Faculty>(`/faculties/${id}`);
  return res.data;
};
export const createFaculty = async (data: Partial<Faculty>) => {
  const res = await api.post<Faculty>(`/faculties`, data);
  return res.data;
};
export const editFaculty = async (id: string, data: Partial<Faculty>) => {
  const res = await api.put<Faculty>(`/faculties/${id}`, data);
  return res.data;
};
export const deleteFaculty = async (id: string) => {
  const res = await api.delete(`/faculties/${id}`);
  return res;
};
