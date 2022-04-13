import React, { useEffect, useState } from "react";
import { api } from "../api";
import StudentCard from "../components/StudentCard";
import { Course, Faculty, Student } from "../types";

type Props = {};

const HomePage = (props: Props) => {
  const [faculties, setFaculties] = useState<Faculty[]>();
  const [students, setStudents] = useState<Student[]>();
  const [filter, setFilter] = useState<Student[]>();
  const [active, setActive] = useState<Faculty | null>();
  const fetchFaculties = async () => {
    const lst: Faculty[] = [];
    const faculties = await api.get("/faculties");
    const students = await api.get("/students");
    faculties.data?.forEach((i: Faculty) => {
      let count = 0;
      students.data.forEach((j: Student) => {
        //   переписать на reduce
        j.courses.forEach((k: Course) => {
          if (k.name === i.name) {
            count += 1;
          }
        });
      });
      lst.push({ ...i, studentsCount: count });
    });
    setStudents(students.data);
    setFilter(students.data);
    setFaculties(lst);
  };
  const searchStudents = (student_name: string) => {
    const res = students?.filter(
      (i) =>
        i.firstName.toLowerCase().includes(student_name.toLowerCase()) ||
        i.lastName.toLowerCase().includes(student_name.toLowerCase())
    );
    setFilter(res);
  };
  const filterByFaculty = (faculty: string) => {
    const res = students?.filter((i) =>
      i.courses.find((i) => i.name === faculty)
    );
    setFilter(res);
  };
  useEffect(() => {
    fetchFaculties();
  }, []);

  return (
    <div className="pa-8">
      <h1 className="font-bold">💐 Lilium - online school</h1>
      <input
        type="text"
        className="border-1 border-violet-100 rounded-md bg-violet-50 px-4 py-2 ma-1 text-lg text-violet-500 w-100%"
        placeholder="search..."
        onChange={(e) => searchStudents(e.target.value)}
      />
      <div className="flex flex-wrap">
        {active ? (
          <>
            <div className="pa-2 border-1 border-violet-100 rounded-2 ma-1 bg-violet-400 text-white cursor-pointer hover:text-violet-500 hover:bg-white">
              {active.name}
            </div>
            <div
              onClick={() => {
                setFilter(students);
                setActive(null);
              }}
              className="flex px-2 items-center border-1 border-violet-100 rounded-2 ma-1 bg-violet-400 text-white cursor-pointer hover:text-violet-500 hover:bg-white"
            >
              <svg width="1.5em" height="1.5em" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9m0 5h2v9H9V8m4 0h2v9h-2V8Z"
                ></path>
              </svg>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-wrap">
        {faculties?.map((item) => {
          let className =
            "pa-2 border-1 border-violet-100 rounded-2 ma-1 bg-white text-violet-400 cursor-pointer hover:text-violet-500";
          return (
            <div
              className={className}
              key={item.id}
              onClick={(e) => {
                className += " bg:violet-400";
                filterByFaculty(item.name);
                setActive(item);
              }}
            >
              {item.name} ({item.studentsCount})
            </div>
          );
        })}
      </div>
      <div className="lg:columns-3 md:columns-2 sm:columns-1 no-break min-h-50vh py-2">
        {filter?.map((student) => {
          return <StudentCard key={student._id} student={student} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
