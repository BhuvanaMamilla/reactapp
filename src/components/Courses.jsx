import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/Courses.css"; // Update the import to the correct CSS file path
import image from "../css/images.jpg";
import Navbar3 from "./Navbar3";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://localhost:8085/api/courses/");
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
      // Handle error, e.g., show an alert
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:8085/api/courses/${id}`
      );
      if (response.status === 200) {
        alert("Course deleted successfully");
        // Update courses state after deletion
        setCourses(courses.filter((course) => course.courseId !== id));
      } else {
        throw new Error("Failed to delete course");
      }
    } catch (error) {
      console.error("Error deleting course:", error);
      alert("Failed to delete course");
    }
  };

  return (
    <div className="courses">
      <Navbar3 />
      <h2>Courses</h2>
      {courses.length === 0 ? (
        <p>No courses available</p>
      ) : (
        <div className="course-cards">
          {courses.map((course) => (
            <div key={course.courseId} className="course-card">
              <img src={image} alt="Course" className="course-image" />
              <div className="course-content">
                <h2>{course.courseName}</h2>
                <p>{course.courseDescription}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Courses;
