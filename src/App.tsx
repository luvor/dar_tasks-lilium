import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import StudentCreate from "./pages/StudentCreate";
import StudentDetail from "./pages/StudentDetail";
import StudentList from "./pages/StudentList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Routes>
        <Route path="/students/create" element={<StudentCreate />} />
        <Route path="/students/detail/:id" element={<StudentDetail />} />
        <Route path="/students" element={<StudentList />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
