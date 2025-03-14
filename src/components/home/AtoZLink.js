import React from "react";

function AtoZLink() {
  return (
    <div className="card h-100 home-card--regular">
      <a href="/a-z">
        <img
          src="/images/home/a-z.png"
          className="card-img-top"
          alt="Dinosaur A-Z"
          loading="lazy"
        />
      </a>
      <div className="card-body d-flex flex-column">
        <a href="/a-z" className="text-decoration-none text-dark">
          <h5 className="card-title">Dinosaur A-Z</h5>
        </a>
        <p className="card-text">
          Browse our comprehensive list of dinosaurs from A to Z and explore
          detailed information on each species.
        </p>
        <a href="/a-z" className="btn btn-secondary home-btn mt-auto">
          Browse A-Z
        </a>
      </div>
    </div>
  );
}

export default AtoZLink;
