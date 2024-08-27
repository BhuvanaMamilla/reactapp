import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/Display.css";

const Display = ({ setView }) => {
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
      <h2>Courses</h2>
      {courses.length === 0 ? (
        <p>No courses available</p>
      ) : (
        <div className="course-cards">
          {courses.map((course) => (
            <div key={course.courseId} className="course-card">
              <div className="course-content">
                <h2>{course.courseName}</h2>
                <p>{course.courseDescription}</p>
              </div>
              <div className="button-container">
                <button onClick={() => handleDelete(course.courseId)}>
                  Delete
                </button>
                <button
                  className="update-btn"
                  onClick={() =>
                    setView({ view: "courseUpdate", courseId: course.courseId })
                  }
                >
                  Update
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <center>
        <button onClick={() => setView("courseAdd")} className="add-btn-update">
          ADD New Course
        </button>
      </center>
    </div>
  );
};

export default Display;
