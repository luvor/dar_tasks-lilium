import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getStudent } from "../../services/students";
import { Student } from "../../types";

type Props = {};

const StudentDetail = (props: Props) => {
  const { id } = useParams();
  const [student, setStudent] = useState<Student>();
  useEffect(() => {
    if (id) {
      getStudent(id).then((res) => {
        setStudent(res);
      });
    }
  }, []);

  return (
    <div>
      <h1>
        {student?.firstName} {student?.lastName}
      </h1>
    </div>
  );
};

export default StudentDetail;
