import React from "react";
import { Student } from "../types";

type Props = {
  student: Student;
};

const StudentCard: React.FC<Props> = ({ student }) => {
  return (
    <div className="no-break md:w-full flex flex-col column pa-2 ma-1 my-4 rounded-md border-1 border-violet-300">
      <p className="pb-1 border-0 border-b-1 border-violet-300">
        {student.firstName} {student.lastName}
      </p>
      <p className="pt-1">
        <b>Courses:</b> [
        {student.courses.map((course) => course.name).join(", ")}]
      </p>
      <p>
        <b>Score:</b>{" "}
        <span className="font-bold text-violet-400">{student.score}</span>
      </p>
    </div>
  );
};

export default StudentCard;
