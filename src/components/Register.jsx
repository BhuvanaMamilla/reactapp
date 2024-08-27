import React, { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    pswd: "",
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

      alert("User registered successfully");
      // Clear the form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        pswd: "",
      });
    } catch (error) {
      console.error("There was an error registering the user!", error);
      alert("Failed to register user");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <div
        style={{
          width: "300px",
          padding: "20px",
          backgroundColor: "#fff",
          border: "1px solid #ddd",
          borderRadius: "5px",
          textAlign: "center",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2>Register User</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "8px",
                fontSize: "1rem",
                border: "1px solid #ccc",
                borderRadius: "3px",
                boxSizing: "border-box",
              }}
              required
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "8px",
                fontSize: "1rem",
                border: "1px solid #ccc",
                borderRadius: "3px",
                boxSizing: "border-box",
              }}
              required
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "8px",
                fontSize: "1rem",
                border: "1px solid #ccc",
                borderRadius: "3px",
                boxSizing: "border-box",
              }}
              required
            />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label htmlFor="pswd">Password:</label>
            <input
              type="password"
              id="pswd"
              name="pswd"
              value={formData.pswd}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "8px",
                fontSize: "1rem",
                border: "1px solid #ccc",
                borderRadius: "3px",
                boxSizing: "border-box",
              }}
              required
            />
          </div>
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "black",
              color: "white",
              border: "none",
              borderRadius: "3px",
              cursor: "pointer",
              fontSize: "1rem",
              transition: "background-color 0.3s ease",
            }}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
