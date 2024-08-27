import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../css/img2.png"; // Make sure the image path is correct

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    pswd: "",
  });
  const [error, setError] = useState("");
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
    setError("");

    try {
      const response = await fetch(
        `http://localhost:8085/api/students/${formData.email}`
      );

      if (!response.ok) {
        throw new Error("User not found");
      }

      const userData = await response.json();

      // Check if password matches
      if (userData.pswd === formData.pswd) {
        setError("");
        localStorage.setItem("userId", userData.email); // Store userId in local storage

        // Redirect based on user role
        if (userData.person === "student") {
          navigate("/courses");
        } else if (userData.person === "faculty") {
          navigate("/dashboard");
        } else {
          setError("Unknown role");
        }
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      setError("User not found. Please check the email.");
      console.error("Error fetching user:", error);
    }
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f0f0f0",
  };

  const cardStyle = {
    display: "flex",
    width: "60%",
    height: "80%",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "5px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
  };

  const imageContainerStyle = {
    flex: "1",
    background: `url(${image}) no-repeat center center`,
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    padding: "20px",
    boxSizing: "border-box",
  };

  const imageDescriptionStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: "20px",
    borderRadius: "5px",
    textAlign: "center",
  };

  const formContainerStyle = {
    flex: "1",
    padding: "40px",
    boxSizing: "border-box",
  };

  const inputStyle = {
    width: "100%",
    padding: "8px",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "3px",
    boxSizing: "border-box",
    marginBottom: "10px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "black",
    color: "white",
    border: "none",
    borderRadius: "3px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s ease",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <div style={imageContainerStyle}>
          {/* <div style={imageDescriptionStyle}>
            <h2>About Our Organization</h2>
            <p>
              We are a leading organization in our field, dedicated to providing
              the best services and products to our customers. Our team of
              professionals is committed to excellence and innovation, ensuring
              that we stay ahead of the competition and meet the evolving needs
              of our clients.
            </p>
          </div> */}
        </div>
        <div style={formContainerStyle}>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={inputStyle}
                required
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
                style={inputStyle}
                required
              />
            </div>
            {error && (
              <div style={{ color: "red", marginBottom: "10px" }}>{error}</div>
            )}
            <button type="submit" style={buttonStyle}>
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
