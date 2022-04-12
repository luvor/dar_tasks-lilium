export interface Faculty {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  studentsCount: number;
}
export interface Course {
  name: string;
}
export interface Student {
  _id: string;
  firstName: string;
  lastName: string;
  score: number;
  courses: Course[];
}
