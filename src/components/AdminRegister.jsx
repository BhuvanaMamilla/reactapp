import React, { useState } from "react";
import "../css/AdminRegister.css";

const AdminRegister = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    pswd: "",
    person: "student",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8085/api/students/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      alert("User registered successfully");
      // Clear the form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        pswd: "",
        person: "student",
      });
    } catch (error) {
      console.error("There was an error registering the user!", error);
      alert("Failed to register user");
    }
  };

  return (
    <div className="card">
      <h2>Registeration Portal</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="pswd">Password:</label>
          <input
            type="password"
            id="pswd"
            name="pswd"
            value={formData.pswd}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="person">Role:</label>
          <select
            id="person"
            name="person"
            value={formData.person}
            onChange={handleChange}
            required
          >
            <option value="student">Student</option>
            <option value="faculty">Faculty</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default AdminRegister;
