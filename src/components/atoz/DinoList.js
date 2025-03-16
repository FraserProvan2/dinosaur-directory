import React, { useRef, useEffect } from "react";

const DinoList = ({ dinosaurs, selectedDino, onDinoSelect }) => {
  const scrollContainerRef = useRef(null);
  const autoScrollRef = useRef(true);

  useEffect(() => {
    if (selectedDino && scrollContainerRef.current && autoScrollRef.current) {
      setTimeout(() => {
        const activeElement =
          scrollContainerRef.current.querySelector(".active-item");
        if (activeElement) {
          activeElement.scrollIntoView({ behavior: "smooth", block: "center" });
          autoScrollRef.current = false;
        }
      }, 100);
    }
  }, [selectedDino]);

  return (
    <div className="scroll-section mb-3">
      <div className="rolling-list-container">
        <div className="gradient-overlay top"></div>
        <div className="gradient-overlay bottom"></div>
        <div className="rolling-list" ref={scrollContainerRef}>
          {dinosaurs.map((dino) => (
            <div
              key={dino.getName()}
              className={`list-item ${
                selectedDino?.getName() === dino.getName() ? "active-item" : ""
              }`}
              onClick={() => {
                autoScrollRef.current = false;
                onDinoSelect(dino);
              }}
            >
              {dino.getName()}
            </div>
          ))}
        </div>
      </div>
      <div className="results-found text-center mt-3">
        <b>{dinosaurs.length}</b> results found
      </div>
    </div>
  );
};

export default DinoList;
