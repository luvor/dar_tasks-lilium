import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="flex flex-wrap pa-2">
      <Link className="nav_link" to="/">
        <svg width="2em" height="2em" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8h5Z"
          ></path>
        </svg>
      </Link>
      <Link className="nav_link ml-auto" to="/students">
        <svg width="1em" height="1em" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M5 5v14h2v2H3V3h4v2H5m15 2H7v2h13V7m0 4H7v2h13v-2m0 4H7v2h13v-2Z"
          ></path>
        </svg>
        see&nbsp;all&nbsp;students
      </Link>
      <Link className="nav_link" to="/students/create">
        <svg width="1em" height="1em" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M15 14c-2.67 0-8 1.33-8 4v2h16v-2c0-2.67-5.33-4-8-4m-9-4V7H4v3H1v2h3v3h2v-3h3v-2m6 2a4 4 0 0 0 4-4a4 4 0 0 0-4-4a4 4 0 0 0-4 4a4 4 0 0 0 4 4Z"
          ></path>
        </svg>
        add&nbsp;student
      </Link>
      <Link className="nav_link" to="/faculties/create">
        <svg width="1em" height="1em" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M13.09 20c.12.72.37 1.39.72 2H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9.09c-.33-.05-.66-.09-1-.09c-.34 0-.67.04-1 .09V4h-5v8l-2.5-2.25L8 12V4H6v16h7.09M20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2h-3Z"
          ></path>
        </svg>
        add&nbsp;faculty
      </Link>
    </nav>
  );
};

export default Navbar;
