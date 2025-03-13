import React from "react";

const DinosaurSidebar = ({
  selectedCountry,
  selectedPeriod,
  dinosInCountry,
  closeSidebar,
}) => {
  return (
    <div className="right-panel">
      <div className="in-period-title">
        Dinosaurs in {selectedCountry} ({selectedPeriod})
      </div>
      <ul className="dino-list">
        {dinosInCountry.map((dino) => (
          <li key={dino.getName()} className="dino-item">
            <a
              href={"/dinosaur/" + dino.getNameLower()}
              className="dino-icon-container"
            >
              <img
                src={"images/dinosaurs/" + dino.getImage()}
                alt={dino.getName()}
                className="dino-icon"
              />
            </a>
            <a href={"/dinosaur/" + dino.getNameLower()}>{dino.getName()}</a>
          </li>
        ))}
      </ul>
      <button
        className="close-btn btn btn-secondary w-100 mb-3"
        onClick={closeSidebar}
      >
        ➦ Close
      </button>
    </div>
  );
};

export default DinosaurSidebar;
