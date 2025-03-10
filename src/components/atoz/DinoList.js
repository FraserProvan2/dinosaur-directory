import React, { useRef } from "react";

const DinoList = ({ dinosaurs, selectedDino, onDinoSelect }) => {
  const scrollContainerRef = useRef(null);

  return (
    <div className="scroll-section mb-3">
      <div className="rolling-list-container">
        <div className="gradient-overlay top"></div>
        <div className="gradient-overlay bottom"></div>
        <div className="rolling-list" ref={scrollContainerRef}>
          {dinosaurs.map((dino) => (
            <div
              key={dino.name}
              className={`list-item ${
                selectedDino?.name === dino.name ? "active-item" : ""
              }`}
              onClick={() => onDinoSelect(dino)}
            >
              {dino.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DinoList;
