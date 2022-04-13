import React from "react";
import { Student, StudentExtended } from "../types";

type Props = {
  student: StudentExtended;
};

const StudentListCard: React.FC<Props> = ({ student }) => {
  const td =
    "group-hover:bg-violet-200 min-w-60 pa-2 mx-1 border-1 border-violet-300 rounded-md";
  return (
    <div className="group flex my-2 text-center">
      <div className="group-hover:bg-violet-200 min-w-20 pa-2 mx-1 border-1 border-violet-300 rounded-md">
        {student.count}
      </div>
      <div className={td}>{student._id}</div>
      <div className={td}>
        {student.firstName} {student.lastName}
      </div>
      <div className={td}>{student.score}</div>
      <div className={td}>
        {student.courses.map((course) => course.name).join(", ")}
      </div>
    </div>
  );
};

export default StudentListCard;
