import React from "react";
import "../css/Navbar.css";

const Navbar = ({ onRegisterClick, onLoginClick }) => {
  return (
    <nav className="navbar">
      <div className="logo">Mouni Educational Instutions</div>
      <ul className="nav-links">
        <li>
          <button className="nav-button" onClick={onLoginClick}>
            Login
          </button>
        </li>
        <li>
          <button className="nav-button" onClick={onRegisterClick}>
            Register
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
