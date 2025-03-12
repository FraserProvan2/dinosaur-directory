import React from "react";
import DinosaurCollection from "../../entities/DinosaurCollection";

function DinosaurOfTheWeek() {
  const dino = DinosaurCollection.getDinosaurOfTheWeek();
  const dinoLink = "/dinosaur/" + dino.name.toLowerCase();
  const livedPeriod = `${dino.fullPeriod} (${dino.yearsMya.start}-${dino.yearsMya.end} million years ago)`;

  return (
    <div className="card h-100 home-card--regular">
      <div className="card-body d-flex flex-column">
      <h5 class="card-title">Dinosaur of the Week</h5>
      <a href={dinoLink}>
        <img
          src={"/images/dinosaurs/" + dino.image}
          className="dino-week"
          alt={dino.name}
        />
      </a>
        <a href={dinoLink} className="text-decoration-none text-dark">
          <h5 className="card-title">{dino.name}</h5>
        </a>
        <p className="card-text">{livedPeriod}</p>
        <a href={dinoLink} className="btn btn-secondary home-btn">
          Learn More
        </a>
      </div>
    </div>
  );
}

export default DinosaurOfTheWeek;
