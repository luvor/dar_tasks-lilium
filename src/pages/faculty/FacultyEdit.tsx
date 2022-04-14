import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FacultyForm from "../../components/faculty/FacultyForm";
import { editFaculty, getFaculty } from "../../services/faculty";
import { Faculty } from "../../types";

type Props = {};

const FacultyEdit = (props: Props) => {
  const [faculty, setFaculty] = useState<Faculty>();
  const { id } = useParams();
  const navigate = useNavigate();
  const handleSubmit = (data: Partial<Faculty>) => {
    // console.log("request ", data);
    if (id) {
      editFaculty(id, data).then((res) => {
        // console.log("response ", res);
        if (res.id) {
          navigate("/faculties");
        }
      });
    }
  };
  useEffect(() => {
    if (id) {
      getFaculty(id).then((res) => setFaculty(res));
    }
  }, [id]);
  return (
    <div className="mx-auto w-fit pb-10">
      <h2 className="text-center">Edit faculty</h2>
      {faculty ? (
        <FacultyForm initialValues={faculty} handleSubmit={handleSubmit} />
      ) : (
        ""
      )}
    </div>
  );
};

export default FacultyEdit;
