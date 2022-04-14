import React, { useState } from "react";
import { Faculty } from "../../types";

type Props = {
  initialValues?: Partial<Faculty>;
  handleSubmit: (data: Partial<Faculty>) => void;
};

const FacultyForm: React.FC<Props> = ({ initialValues, handleSubmit }) => {
  const [vals, setVals] = useState<Partial<Faculty>>(
    initialValues ?? {
      name: "",
    }
  );
  const changeField = (fieldName: keyof Faculty) => {
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
            Name
          </label>
          <input
            className="text-lg pa-1 rounded-md border-1 border-violet-200 invalid:border-pink-500 invalid:text-pink-600"
            type="text"
            id="name"
            name="name"
            value={vals?.name}
            onChange={changeField("name")}
          />
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

export default FacultyForm;
