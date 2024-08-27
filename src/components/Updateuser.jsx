import React, { useState, useEffect } from "react";
import "../css/AdminRegister.css";

const Updateuser = () => {
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
      let apiUrl = "http://localhost:8085/api/students/";
      let method = "POST";

      // Check if there's an email in the formData to determine if it's an update
      if (formData.email) {
        apiUrl += formData.email; // Assuming your API endpoint expects the email as part of the URL
        method = "PUT";
      }

      const response = await fetch(apiUrl, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      if (method === "POST") {
        alert("User registered successfully");
      } else {
        alert("User updated successfully");
      }

      // Clear the form after submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        pswd: "",
        person: "student",
      });
    } catch (error) {
      console.error(
        "There was an error registering or updating the user!",
        error
      );
      alert("Failed to register or update user");
    }
  };

  return (
    <div className="card">
      <h2>Registration Portal</h2>
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
            required={!formData.email} // Make email field optional for update
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
        <button type="submit">{formData.email ? "Update" : "Register"}</button>
      </form>
    </div>
  );
};

export default Updateuser;
