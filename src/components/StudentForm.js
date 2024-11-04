// src/components/StudentForm.js
import React, { useContext, useState } from 'react';
import { StudentContext } from '../context/StudentContext';
import { useNavigate } from 'react-router-dom';

const StudentForm = () => {
  const { addStudent } = useContext(StudentContext);
  const [student, setStudent] = useState({ name: '', email: '', age: '', class: '', address: '', phone: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setStudent({ ...student, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent({ ...student, id: Date.now() });
    navigate('/students');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" onChange={handleChange} placeholder="Name" required />
      <input type="email" name="email" onChange={handleChange} placeholder="Email" required />
      <input type="text" name="age" onChange={handleChange} placeholder="Age" required />
      <input type="text" name="class" onChange={handleChange} placeholder="Class" required />
      <input type="text" name="address" onChange={handleChange} placeholder="Address" required />
      <input type="text" name="phone" onChange={handleChange} placeholder="Phone" required />
      <button type="submit">Add Student</button>
    </form>
  );
};

export default StudentForm;
