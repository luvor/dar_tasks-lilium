import { useNavigate } from "react-router-dom";
import StudentForm from "../../components/student/StudentForm";
import { createStudent } from "../../services/students";
import { Student } from "../../types";

type Props = {};

const StudentCreate = (props: Props) => {
  const navigate = useNavigate();
  const handleSubmit = (data: Partial<Student>) => {
    console.log("request ", data);
    createStudent(data).then((res) => {
      // console.log("response ", res);
      if (res._id) {
        navigate("/students");
      }
    });
  };
  return (
    <div className="flex pb-10 min-h-50vh">
      <div className="pa-2 mx-auto">
        <h2 className="text-center">Create student</h2>
        <StudentForm handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default StudentCreate;
