import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/AdminRegister.css";

const CourseAdd = () => {
  const [formData, setFormData] = useState({
    courseName: "",
    courseDescription: "",
  });
  const navigate = useNavigate();

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
      const response = await fetch("http://localhost:8085/api/courses/", {
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
      alert("Course added successfully");
      // Clear the form
      setFormData({
        courseName: "",
        courseDescription: "",
      });
      navigate("/dashboard");
    } catch (error) {
      console.error("There was an error adding the course!", error);
      alert("Failed to add course");
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
