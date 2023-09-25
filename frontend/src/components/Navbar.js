import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-white ">
      <ul className="navbar-nav ">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
        <Link className="nav-link" to="/gallery">
          Gallery
        </Link>
        <Link className="nav-link" to="/registration">
          Registration
        </Link>
        <Link className="nav-link" to="/feedback">
          Feedback
        </Link>
      </ul>
    </div>
  );
}
