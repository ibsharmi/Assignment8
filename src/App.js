// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { StudentProvider } from './context/StudentContext';
import Dashboard from './components/Dashboard';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import StudentDetails from './components/StudentDetails';
import UpdateStudent from './components/UpdateStudent';
import './styles.css';

function App() {
  return (
    <StudentProvider>
      <Router>
        <div className="container">
          <nav>
            <Link to="/">Dashboard</Link>
            <Link to="/students">Student List</Link>
            <Link to="/students/new">Register Student</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/students" element={<StudentList />} />
            <Route path="/students/new" element={<StudentForm />} />
            <Route path="/students/:id" element={<StudentDetails />} />
            <Route path="/students/edit/:id" element={<UpdateStudent />} />
          </Routes>
        </div>
      </Router>
    </StudentProvider>
  );
}

export default App;
