import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/DisplayUsers.css";
import AssignCourse from "../components/AssignCourse";

const DisplayUsers = ({ setView }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8085/api/students/");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const handleDelete = async (email) => {
    try {
      const response = await axios.delete(
        `http://localhost:8085/api/students/${email}`
      );
      if (response.status === 200) {
        alert("User deleted successfully");
        setUsers(users.filter((user) => user.email !== email));
      } else {
        throw new Error("Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("Failed to delete user");
    }
  };

  const handleUpdate = (email) => {
    // Placeholder for update functionality
    alert(`Update functionality for ${email} to be implemented`);
  };

  return (
    <div className="user-list">
      <h2>Users</h2>
      {users.length === 0 ? (
        <p>No users available</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.email} className="user-item">
              <div>
                <strong>
                  {user.firstName} {user.lastName}
                </strong>
                <p>Email: {user.email}</p>
                <p>
                  Role: <strong>{user.person}</strong>
                </p>
              </div>
              <div>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(user.email)}
                >
                  Delete
                </button>
                <button
                  className="update-btn"
                  onClick={() => setView("Updateuser")}
                >
                  Update
                </button>
              </div>
              {/* {user.person === "student" && <AssignCourse email={user.email} />} */}
            </li>
          ))}
        </ul>
      )}
      <center>
        <button
          onClick={() => setView("UserAdd")}
          style={{
            marginRight: "10px",
            padding: "10px 20px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "1rem",
            transition: "background-color 0.3s ease",
          }}
        >
          ADD New User
        </button>
      </center>
    </div>
  );
};

export default DisplayUsers;
