import React from "react";
import { Link, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaBars } from "react-icons/fa";

function Navbar() {
  const location = useLocation();

  const handleNavClick = (event, path) => {
    if (location.pathname === "/discover") {
      window.location.href = path;
    }

    if (location.pathname === path) {
      window.location.reload();
      event.preventDefault();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link
          className="navbar-brand d-flex align-items-center"
          to="/"
          onClick={(e) => handleNavClick(e, "/")}
        >
          <img
            src="/images/logo/logo-circle.png"
            alt="Dino Logo"
            className="navbar-logo"
          />
          <span className="ms-2">dinosaur.directory</span>
        </Link>

        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FaBars size={24} />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/discover"
                onClick={(e) => handleNavClick(e, "/discover")}
              >
                Discover
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/a-z"
                onClick={(e) => handleNavClick(e, "/a-z")}
              >
                A-Z
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/quizzes"
                onClick={(e) => handleNavClick(e, "/quizzes")}
              >
                Quizzes
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
