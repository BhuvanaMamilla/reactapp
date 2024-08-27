import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Login from "../components/Login";
import Register from "../components/Register";

const Main = () => {
  const [showLogin, setShowLogin] = useState(true);

  const handleRegisterClick = () => {
    setShowLogin(false);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  return (
    <div className="Main">
      <Navbar
        onRegisterClick={handleRegisterClick}
        onLoginClick={handleLoginClick}
      />
      {showLogin ? <Login /> : <Register />}
    </div>
  );
};

export default Main;
