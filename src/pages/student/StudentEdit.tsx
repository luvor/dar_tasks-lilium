import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import StudentForm from "../../components/student/StudentForm";
import { editStudent, getStudent } from "../../services/students";
import { Student } from "../../types";

type Props = {};

const StudentEdit = (props: Props) => {
  const [student, setStudent] = useState<Student>();
  const { id } = useParams();
  const navigate = useNavigate();
  const handleSubmit = (data: Partial<Student>) => {
    // console.log("request ", data);
    if (id) {
      editStudent(id, data).then((res) => {
        // console.log("response ", res);
        if (res._id) {
          navigate("/students");
        }
      });
    }
  };
  useEffect(() => {
    if (id) {
      getStudent(id).then((res) => setStudent(res));
    }
  }, [id]);

  return (
    <div className="mx-auto w-fit pb-10">
      <h2 className="text-center">StudentEdit</h2>
      {student ? (
        <StudentForm initialValues={student} handleSubmit={handleSubmit} />
      ) : (
        ""
      )}
    </div>
  );
};

export default StudentEdit;
