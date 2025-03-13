import React from "react";

function Footer() {
  return (
    <footer className="py-3">
      <div className="container text-center">
        <small className="text-muted">
          &copy; {new Date().getFullYear()} dinosaur.directory
        </small>
      </div>
    </footer>
  );
}

export default Footer;
