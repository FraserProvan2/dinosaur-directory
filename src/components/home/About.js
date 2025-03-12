import React from "react";

function About() {
  return (
    <div className="card h-100 home-card--regular">
      <img
        src="https://placehold.co/300x200?text=About"
        className="card-img-top"
        alt="About"
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">About</h5>
        <p className="card-text">About + our data</p>
      </div>
    </div>
  );
}

export default About;
