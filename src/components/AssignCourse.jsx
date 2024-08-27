import React, { useState, useEffect } from "react";
import axios from "axios";

const AssignCourse = ({ email }) => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState("");

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await axios.get("http://localhost:8085/api/courses/");
      setCourses(response.data);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const handleAssign = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8085/api/assign-course",
        {
          studentEmail: email,
          courseId: selectedCourse,
        }
      );
      if (response.status === 200) {
        alert("Course assigned successfully");
      } else {
        throw new Error("Failed to assign course");
      }
    } catch (error) {
      console.error("Error assigning course:", error);
      alert("Failed to assign course");
    }
  };

  return (
    <div className="assign-course">
      <select
        value={selectedCourse}
        onChange={(e) => setSelectedCourse(e.target.value)}
      >
        <option value="">Select a course</option>
        {courses.map((course) => (
          <option key={course.courseId} value={course.courseId}>
            {course.courseName}
          </option>
        ))}
      </select>
      <button className="assign" onClick={handleAssign}>
        Assign
      </button>
    </div>
  );
};

export default AssignCourse;
