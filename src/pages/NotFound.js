import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <img src="/images/logo/logo.png" alt="Logo" className="not-found-logo" />
      <h1 className="not-found-title">404 - Page Not Found</h1>
      <p className="not-found-description">
        The page you're looking for does not exist.
      </p>
      <Link to="/" className="not-found-link">
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
