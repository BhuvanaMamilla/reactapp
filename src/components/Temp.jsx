import React from "react";
import image from "../css/image.png"; // Import the image

const Temp = () => {
  const containerStyle = {
    textAlign: "center",
    marginTop: "20px",
  };

  const imageStyle = {
    width: "300px",
    height: "auto",
    borderRadius: "10px",
  };

  const headingStyle = {
    marginTop: "20px",
    fontSize: "24px",
    fontWeight: "bold",
  };

  const descriptionStyle = {
    marginTop: "10px",
    fontSize: "16px",
    maxWidth: "600px",
    margin: "10px auto",
    lineHeight: "1.5",
  };

  return (
    <div style={containerStyle}>
      <img src={image} alt="Organization" style={imageStyle} />
      <h2 style={headingStyle}>About Our Organization</h2>
      <p style={descriptionStyle}>
        We are a leading organization in our field, dedicated to providing the
        best services and products to our customers. Our team of professionals
        is committed to excellence and innovation, ensuring that we stay ahead
        of the competition and meet the evolving needs of our clients.
      </p>
    </div>
  );
};

export default Temp;
