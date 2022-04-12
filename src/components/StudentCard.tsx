import React from "react";
import { Student } from "../types";

type Props = {
  student: Student;
};

const StudentCard: React.FC<Props> = ({ student }) => {
  return (
    <div className="flex flex-col column pa-2 ma-1 rounded-md border-1 border-violet-300">
      <p>
        {student.firstName} {student.lastName}
      </p>
      <p>
        Score:{" "}
        <span className="font-bold text-violet-400">{student.score}</span>
      </p>
    </div>
  );
};

export default StudentCard;
