import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteFaculty, getFaculties } from "../../services/faculty";
import { Faculty } from "../../types";

type Props = {};

const FacultyList = (props: Props) => {
  const [faculties, setFaculties] = useState<Faculty[]>();
  useEffect(() => {
    getFaculties().then((res) => setFaculties(res));
  }, []);
  const delFaculty = (id: string) => {
    deleteFaculty(id).then((res) => {
      getFaculties().then((res) => setFaculties(res));
    });
  };

  return (
    <div className="pb-10">
      <h2 className="pb-2">FacultyList</h2>
      <div className="flex flex-col">
        {faculties?.map((item) => {
          return (
            <div
              key={item.id}
              className="group flex items-center pa-1 text-violet-400 border-0 border-b-1 border-violet-300 hover:bg-violet-300 hover:text-white"
            >
              <div className="font-bold">{item.name}</div>
              <Link
                to={"/faculties/edit/" + item.id}
                className="ml-auto pa-1 rounded-md flex justify-center items-center decoration-none hover:bg-violet-500 hover:text-white indent-1"
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
                onClick={() => delFaculty(item.id)}
                className="pa-1 rounded-md flex justify-center items-center decoration-none hover:bg-violet-500 hover:text-white indent-1 cursor-pointer"
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
          );
        })}
      </div>
    </div>
  );
};

export default FacultyList;
