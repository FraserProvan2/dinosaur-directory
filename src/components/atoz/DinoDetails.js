import React from "react";
import { getDietPillClass } from "./utils";

const DinoDetails = ({ dino }) => {
  return (
    <div className="dino-container">
      <div className="dinosaur-header">
        <h2 className="text-primary">{dino.name}</h2>
        <p className="pronunciation text-muted text-sm">
          ({dino.pronunciation})
        </p>
      </div>
      <img
        src={`/images/dinosaurs/${dino.image}`}
        alt={dino.name}
        className="img-fluid dino-listing-image mb-3"
      />
      <div className="dino-details">
        <div className="card-body">
          <p className="card-text">
            <strong>Diet:</strong>{" "}
            <span className={`diet-pill ${getDietPillClass(dino.diet)}`}>
              {dino.diet}
            </span>
          </p>
          <p className="card-text">
            <strong>Period:</strong> {dino.fullPeriod} (<b>{dino.yearsMya.start}-
            {dino.yearsMya.end}</b> million years ago)
          </p>
          <p className="card-text">
            <strong>Meaning:</strong> {dino.meaning}
          </p>
          <p className="card-text">
            <strong>Length:</strong> {dino.lengthMeters} meters
          </p>
          <p className="card-text">
            <strong>Found In:</strong> {dino.foundIn.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DinoDetails;
