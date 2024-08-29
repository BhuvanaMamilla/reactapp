import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/AdminRegister.css"; // Adjust the import based on your file structure

const CourseAdd = () => {
  const [formData, setFormData] = useState({
    courseName: "",
    courseDescription: "",
  });
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Use environment variable or default to EC2 instance URL
      const API_URL = process.env.REACT_APP_API_URL || "http://52.53.155.231";
      const response = await fetch(`${API_URL}/api/courses/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        // Handle errors more gracefully
        const errorData = await response.json();
        throw new Error(`Error: ${response.status} - ${errorData.message}`);
      }

      await response.json();
      alert("Course added successfully");

      // Clear the form
      setFormData({
        courseName: "",
        courseDescription: "",
      });

      // Navigate to dashboard
      navigate("/dashboard");
    } catch (error) {
      console.error("There was an error adding the course!", error);
      alert("Failed to add course. Please try again.");
    }
  };

  return (
    <div className="card">
      <h2>Add New Course</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="courseName">Course Name:</label>
          <input
            type="text"
            id="courseName"
            name="courseName"
            value={formData.courseName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="courseDescription">Course Description:</label>
          <textarea
            id="courseDescription"
            name="courseDescription"
            value={formData.courseDescription}
            onChange={handleChange}
            rows="4"
            required
          />
        </div>
        <button type="submit">Add Course</button>
      </form>
    </div>
  );
};

export default CourseAdd;
