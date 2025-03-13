import React from "react";
import { getDietPillClass } from "./utils";

const DinoDetails = ({ dino }) => {
  return (
    <div className="dino-container">
      <div className="dinosaur-header">
        <h2 className="text-primary">{dino.getName()}</h2>
        <p className="pronunciation text-muted text-sm">{`(${dino.getPronunciation()})`}</p>
      </div>
      <img
        src={`/images/dinosaurs/${dino.getImage()}`}
        alt={dino.getName()}
        className="img-fluid dino-listing-image mb-3"
      />
      <div className="dino-details">
        <div className="card-body">
          <p className="card-text">
            <strong>Diet:</strong>{" "}
            <span className={`diet-pill ${getDietPillClass(dino.getDiet())}`}>
              {dino.getDiet()}
            </span>
          </p>
          <p className="card-text">
            <strong>Period:</strong> {dino.getFullPeriod()} (
            <b>
              {dino.getYearsMya().start}-{dino.getYearsMya().end}
            </b>{" "}
            million years ago)
          </p>
          <p className="card-text">
            <strong>Meaning:</strong> {dino.getMeaning()}
          </p>
          <p className="card-text">
            <strong>Length:</strong> {dino.getLengthMeters()} meters
          </p>
          <p className="card-text">
            <strong>Found In:</strong> {dino.getFoundInString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DinoDetails;
