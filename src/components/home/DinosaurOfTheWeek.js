import React from "react";

function DinosaurOfTheWeek() {
  return (
    <div className="card h-100 home-card--regular">
      <img
        src="https://placehold.co/300x200?text=Dinosaur+of+the+Week"
        className="card-img-top"
        alt="Dinosaur of the Week"
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">Dinosaur of the Week</h5>
        <p className="card-text">
          Check out our featured dinosaur of the week. Learn its history,
          interesting facts, and see why it stands out.
        </p>
      </div>
    </div>
  );
}

export default DinosaurOfTheWeek;
