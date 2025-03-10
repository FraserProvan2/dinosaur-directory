import React, { useState, useEffect, useRef } from "react";
import Globe from "./Globe";
import DinosaurCollection from "../../entities/DinosaurCollection";
import fullPeriods from "../../data/full-periods.json";

const PRIMARY_COLOR = "#AA0000";
const periods = Object.keys(fullPeriods);

function MesozoicEras() {
  const [selectedPeriod, setSelectedPeriod] = useState(periods[0]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const allDinosaurs = useRef(DinosaurCollection.getAllDinosaurs());
  const [availableLocations, setAvailableLocations] = useState([]);

  useEffect(() => {
    setAvailableLocations(
      allDinosaurs.current.reduce((acc, dino) => {
        if (dino.fullPeriod === selectedPeriod) {
          dino.foundIn.forEach((location) => {
            if (!acc.includes(location)) {
              acc.push(location);
            }
          });
        }
        return acc;
      }, [])
    );
  }, [selectedPeriod]);

  const dinosInCountry = selectedCountry
    ? allDinosaurs.current.filter(
        (dino) =>
          dino.foundIn.includes(selectedCountry) &&
          dino.fullPeriod === selectedPeriod
      )
    : [];

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
    setSelectedCountry(null);
  };

  return (
    <div className="home-container">
      <input
        type="range"
        min="0"
        max={periods.length - 1}
        step="1"
        value={periods.indexOf(selectedPeriod)}
        onChange={(e) => setSelectedPeriod(periods[e.target.value])}
        className="period-slider"
      />
      <div className="period-text-container text-center">
        <p className="period-text">{selectedPeriod}</p>
        <div className="period-years">(<b>{fullPeriods[selectedPeriod]}</b> ~ million years ago)</div>
      </div>
      <div className="content-container">
        <div className={`left-panel ${isSidebarOpen ? "" : "expanded"}`}>
          <div className="globe-container">
            <Globe
              selectedPeriod={selectedPeriod}
              availableLocations={availableLocations}
              onCountryClick={handleCountryClick}
              PRIMARY_COLOR={PRIMARY_COLOR}
            />
          </div>
        </div>
        {isSidebarOpen && selectedCountry && (
          <div className="right-panel">
            <div className="in-period-title">
              Dinosaurs in {selectedCountry} ({selectedPeriod})
            </div>
            <ul className="dino-list">
              {dinosInCountry.map((dino) => (
                <li key={dino.name} className="dino-item">
                  <a href={'/dinosaur/' + dino.name.toLowerCase()} className="dino-icon-container">
                    <img
                      src={"images/dinosaurs/" + dino.image}
                      alt={dino.name}
                      className="dino-icon"
                    />
                  </a>
                    <a href={'/dinosaur/' + dino.name.toLowerCase()}>
                      {dino.name}
                   </a>
                </li>
              ))}
            </ul>
            <button
              className="close-btn btn w-100 mb-3"
              onClick={closeSidebar}
            >
              ➦ Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default MesozoicEras;