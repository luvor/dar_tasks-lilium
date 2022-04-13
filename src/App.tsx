import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import StudentCreate from "./pages/StudentCreate";
import StudentDetail from "./pages/StudentDetail";
import StudentList from "./pages/StudentList";
import FacultyCreate from "./pages/FacultyCreate";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <main className="pa-1 md:px-8">
        <Routes>
          <Route path="/faculties/create" element={<FacultyCreate />} />
          <Route path="/students/create" element={<StudentCreate />} />
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
