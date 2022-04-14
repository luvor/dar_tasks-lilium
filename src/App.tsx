import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import StudentCreate from "./pages/student/StudentCreate";
import StudentDetail from "./pages/student/StudentDetail";
import StudentList from "./pages/student/StudentList";
import FacultyCreate from "./pages/faculty/FacultyCreate";
import StudentEdit from "./pages/student/StudentEdit";
import FacultyList from "./pages/faculty/FacultyList";
import FacultyEdit from "./pages/faculty/FacultyEdit";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main className="pa-1 md:px-8">
        <Routes>
          <Route path="/faculties/edit/:id" element={<FacultyEdit />} />
          <Route path="/faculties/create" element={<FacultyCreate />} />
          <Route path="/faculties" element={<FacultyList />} />
          <Route path="/students/create" element={<StudentCreate />} />
          <Route path="/students/edit/:id" element={<StudentEdit />} />
          <Route path="/students/detail/:id" element={<StudentDetail />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
