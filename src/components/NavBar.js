import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ORG } from "../data.js";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top pencil-navbar shadow-sm">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="/logos.png"
            alt="PPDP Logo"
            className="me-2"
            style={{ height: "50px", width: "auto" }}
          />
          <span className="fw-bold org-name">{ORG.name}</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle}
          aria-controls="navbarNav"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item">
              <NavLink onClick={handleLinkClick} className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={handleLinkClick} className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={handleLinkClick} className="nav-link" to="/programs">Programs</NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={handleLinkClick} className="nav-link" to="/projects">Projects</NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={handleLinkClick} className="nav-link" to="/team">Team</NavLink>
            </li>
            <li className="nav-item">
              <NavLink onClick={handleLinkClick} className="nav-link" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
