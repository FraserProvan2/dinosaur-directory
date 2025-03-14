import React from "react";
import DinosaurCollection from "../../entities/DinosaurCollection";

function DinosaurOfTheWeek() {
  const dino = DinosaurCollection.getDinosaurOfTheWeek();
  const dinoLink = "/dinosaur/" + dino.getNameLower();
  const yearsMya = dino.getYearsMya();
  const livedPeriod = `${dino.getFullPeriod()} (${yearsMya.start}-${
    yearsMya.end
  } million years ago)`;

  return (
    <div className="card h-100 home-card--regular">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">Dinosaur of the Week</h5>
        <a href={dinoLink}>
          <img
            src={"/images/dinosaurs/" + dino.getImage()}
            className="dino-week"
            alt={dino.getName()}
            loading="lazy"
          />
        </a>
        <a href={dinoLink} className="text-decoration-none text-dark">
          <h5 className="card-title">{dino.getName()}</h5>
        </a>
        <p className="card-text">{livedPeriod}</p>
        <a href={dinoLink} className="btn btn-secondary home-btn mt-auto">
          Learn More
        </a>
      </div>
    </div>
  );
}

export default DinosaurOfTheWeek;
