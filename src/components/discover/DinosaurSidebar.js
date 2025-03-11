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
          <li key={dino.name} className="dino-item">
            <a
              href={"/dinosaur/" + dino.name.toLowerCase()}
              className="dino-icon-container"
            >
              <img
                src={"images/dinosaurs/" + dino.image}
                alt={dino.name}
                className="dino-icon"
              />
            </a>
            <a href={"/dinosaur/" + dino.name.toLowerCase()}>{dino.name}</a>
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
