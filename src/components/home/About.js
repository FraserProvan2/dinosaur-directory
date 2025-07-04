import React from "react";

function About() {
  return (
    <div className="card h-100 home-card--regular">
      <img
        src="/images/home/about.png"
        className="card-img-top"
        alt="About"
        loading="lazy"
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">Resources</h5>
        <p className="card-text small mt-2">
          dinosaur.directory couldn’t have been made without the help of these resources:
        </p>
        <ul className="list-unstyled small">
          <li>
            Data, Images from{" "}
            <a
              href="https://www.nhm.ac.uk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Natural History Museum
            </a>
          </li>
          <li>
            Maps from{" "}
            <a
              href="https://dinosaurpictures.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dinosaur Pictures
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
