// src/components/Navbar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Navbar3.css";

const Navbar3 = () => {
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="navbar-brand">MyCourses</div>

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
    </nav>
  );
};

export default Navbar3;
