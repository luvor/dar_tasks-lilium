import React, { useState } from "react";
import { Student } from "../../types";

type Props = {
  initialValues?: Partial<Student>;
  handleSubmit: (data: Partial<Student>) => void;
};

const StudentForm: React.FC<Props> = ({ initialValues, handleSubmit }) => {
  const [vals, setVals] = useState<Partial<Student>>(
    initialValues ?? {
      firstName: "",
      lastName: "",
      score: 0,
      courses: [],
    }
  );
  const [courseName, setCourseName] = useState<string>("");
  const addCourse = () => {
    // console.log(courseName);
    let notincourses = true;
    vals.courses?.forEach((item) => {
      if (item.name === courseName) {
        notincourses = false;
      }
    });
    if (courseName && courseName.trim() && notincourses) {
      setVals((v) => ({
        ...v,
        courses: [...(v.courses ?? []), { name: courseName.trim() }],
      }));
      setCourseName("");
    }
  };
  const changeField = (fieldName: keyof Student) => {
    return (e: any) => {
      setVals((v) => ({
        ...v,
        [fieldName]: e.target.value,
      }));
    };
  };

  return (
    <div className="pa-2">
      <form
        className="max-w-fit"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(vals);
        }}
      >
        <div className="pa-1 flex flex-col">
          <label className="text-violet-500 lowercase" htmlFor="firstname">
            First name
          </label>
          <input
            className="text-lg pa-1 rounded-md border-1 border-violet-200 invalid:border-pink-500 invalid:text-pink-600"
            type="text"
            id="firstname"
            name="firstname"
            value={vals?.firstName}
            onChange={changeField("firstName")}
          />
        </div>
        <div className="pa-1 flex flex-col">
          <label className="text-violet-500 lowercase" htmlFor="firstname">
            Last name
          </label>
          <input
            className="text-lg pa-1 rounded-md border-1 border-violet-200 invalid:border-pink-500 invalid:text-pink-600"
            type="text"
            id="lastname"
            name="lastname"
            value={vals?.lastName}
            onChange={changeField("lastName")}
          />
        </div>
        <div className="pa-1 flex flex-col">
          <label className="text-violet-500 lowercase" htmlFor="score">
            Score
          </label>
          <input
            className="text-lg pa-1 rounded-md border-1 border-violet-200 appearance-none no-appearance invalid:border-pink-500 invalid:text-pink-600"
            type="number"
            id="score"
            name="score"
            value={vals?.score}
            onChange={changeField("score")}
          />
        </div>
        <div className="pa-1 flex flex-col">
          <label className="text-violet-500 lowercase" htmlFor="courseName">
            Courses
          </label>
          <div className="flex">
            <input
              className="text-lg pa-1 rounded-md border-1 border-violet-200 appearance-none no-appearance invalid:border-pink-500 invalid:text-pink-600"
              type="string"
              id="courseName"
              name="courseName"
              placeholder="add course"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
            />
            <button
              className="flex items-center border-1 border-violet-500 rounded-md text-violet-500 bg-white ml-2 font-bold px-1 hover:text-white hover:bg-violet-500 cursor-pointer"
              type="button"
              onClick={addCourse}
            >
              <svg width="1em" height="1em" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z"
                ></path>
              </svg>
              Add
            </button>
          </div>
          <div className="flex flex-wrap px-1 py-2 font-bold text-violet-400">
            [{vals.courses?.map((c) => c.name).join(", ")}]
          </div>
        </div>
        <div className="pa-1 flex flex-col">
          <button className="btn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;
