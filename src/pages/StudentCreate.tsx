import React, { FormEvent, useState } from "react";
import { Course } from "../types";

type Props = {};

const StudentCreate = (props: Props) => {
  const [fname, setFname] = useState<string>("");
  const [lname, setLname] = useState<string>("");
  const [score, setScore] = useState<number>(0);
  const [courses, setCourses] = useState<Course[]>();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex">
      <div className="pa-2 mx-auto">
        <h1>CreateStudent</h1>
        <form className="max-w-fit" onSubmit={handleSubmit}>
          <div className="pa-1 flex flex-col">
            <label htmlFor="firstname">First name</label>
            <input
              className="pa-1 rounded-md border-1 border-violet-200"
              type="text"
              id="firstname"
              name="firstname"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
          </div>
          <div className="pa-1 flex flex-col">
            <label htmlFor="firstname">Last name</label>
            <input
              className="pa-1 rounded-md border-1 border-violet-200"
              type="text"
              id="lastname"
              name="lastname"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
          </div>
          <div className="pa-1 flex flex-col">
            <label htmlFor="score">Score</label>
            <input
              className="pa-1 rounded-md border-1 border-violet-200"
              type="number"
              id="score"
              name="score"
              value={score}
              onChange={(e) => setScore(Number(e.target.value))}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentCreate;
