import React from "react";
import "../css/Navbar2.css";
import { useNavigate } from "react-router-dom";

const Navbar2 = ({ setView }) => {
  const navigate = useNavigate();
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        backgroundColor: "#333",
        color: "#fff",
      }}
    >
      <div style={{ fontSize: "1.5rem" }}>Admin</div>
      <div>
        <button
          onClick={() => setView("DisplayUsers")}
          style={{
            marginRight: "10px",
            padding: "10px 20px",
            backgroundColor: "#555",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "1rem",
            transition: "background-color 0.3s ease",
          }}
        >
          Enrolled Users
        </button>

        <button
          onClick={() => setView("display")}
          style={{
            padding: "10px 20px",
            backgroundColor: "#555",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "1rem",
            transition: "background-color 0.3s ease",
          }}
        >
          Display Courses
        </button>
        <button
          onClick={() => navigate("/")}
          style={{
            padding: "10px 20px",
            backgroundColor: "#555",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "1rem",
            transition: "background-color 0.3s ease",
          }}
        >
          Log Out
        </button>
      </div>
    </nav>
  );
};

export default Navbar2;
