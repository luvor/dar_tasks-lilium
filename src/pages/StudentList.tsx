import React, { useEffect, useState } from "react";
import { getStudents } from "../services/students";
import { Student } from "../types";
import StudentListCard from "../components/StudentListCard";

type Props = {};

const StudentList = (props: Props) => {
  const [students, setStudents] = useState<Student[]>();
  useEffect(() => {
    getStudents().then((res) => setStudents(res));
  }, []);
  const th =
    "min-w-60 pa-2 mx-1 border-1 text-white bg-violet-400 border-violet-300 rounded-md";

  return (
    <div>
      <h2 className="text-center">StudentList</h2>
      <div className="overflow-x-auto pb-4">
        <div className="flex my-2 text-center">
          <div className="min-w-20 pa-2 mx-1 border-1 text-white bg-violet-400 border-violet-300 rounded-md">
            #
          </div>
          <div className={th}>_id</div>
          <div className={th}>Name</div>
          <div className={th}>Score</div>
          <div className={th}>Courses</div>
        </div>
        <div>
          {students?.map((student, index) => (
            <StudentListCard
              key={student._id}
              student={{ ...student, count: index + 1 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentList;
