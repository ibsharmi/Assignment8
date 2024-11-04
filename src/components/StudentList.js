// src/components/StudentList.js
import React, { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';

const StudentList = () => {
  const { students, deleteStudent } = useContext(StudentContext);

  return (
    <div>
      <h1>Student List</h1>
      <table>
        <thead>
          <tr><th>Name</th><th>Email</th><th>Class</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.class}</td>
              <td>
                <button onClick={() => deleteStudent(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
