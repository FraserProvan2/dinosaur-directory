import React from "react";

function DiscoverLink() {
  return (
    <div className="card h-100 home-card--hero">
      <a href="/discover">
        <img
          src="/images/home/discover.png"
          className="card-img-top"
          alt="Discover Dinosaurs"
        />
      </a>
      <div className="card-body d-flex flex-column">
        <a href="/discover" className="text-decoration-none text-dark">
          <h5 className="card-title">Discover the Mesozoic Era</h5>
        </a>
        <p className="card-text">
          Explore our interactive globe. Drag the sliders through different eras
          and click on countries to see which dinosaurs were found.
        </p>
        <a href="/discover" className="btn btn-primary home-btn">
          Explore
        </a>
      </div>
    </div>
  );
}

export default DiscoverLink;
