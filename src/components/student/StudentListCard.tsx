import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteStudent } from "../../services/students";
import { Student, StudentExtended } from "../../types";

type Props = {
  student: StudentExtended;
};

const StudentListCard: React.FC<Props> = ({ student }) => {
  const delStudent = () => {
    deleteStudent(student._id).then((res) => console.log(res));
  };
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
      <div className={td + " flex justify-evenly"}>
        <Link
          to={"/students/edit/" + student._id}
          className="pa-2 ma-[-8px] rounded-md flex justify-center items-center decoration-none hover:bg-violet-500 hover:text-white indent-1"
        >
          <svg width="1em" height="1em" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25Z"
            ></path>
          </svg>
          edit
        </Link>
        <div
          onClick={delStudent}
          className="pa-2 ma-[-8px] rounded-md flex justify-center items-center decoration-none hover:bg-violet-500 hover:text-white indent-1 cursor-pointer"
        >
          <svg width="1em" height="1em" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12Z"
            ></path>
          </svg>
          delete
        </div>
      </div>
    </div>
  );
};

export default StudentListCard;
