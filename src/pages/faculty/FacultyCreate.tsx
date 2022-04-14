import React from "react";
import { useNavigate } from "react-router-dom";
import FacultyForm from "../../components/faculty/FacultyForm";
import { createFaculty } from "../../services/faculty";
import { Faculty } from "../../types";

type Props = {};

const FacultyCreate = (props: Props) => {
  const navigate = useNavigate();
  const handleSubmit = (data: Partial<Faculty>) => {
    console.log("request ", data);
    createFaculty(data).then((res) => {
      // console.log("response ", res);
      if (res.id) {
        navigate("/faculties");
      }
    });
  };
  return (
    <div className="max-w-fit ma-auto">
      <h2 className="text-center">FacultyCreate</h2>
      <FacultyForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default FacultyCreate;
