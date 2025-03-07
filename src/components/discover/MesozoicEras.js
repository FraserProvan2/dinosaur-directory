import React, { useState, useEffect, useRef } from "react";
import Globe from "./Globe";
import DinosaurCollection from "../../entities/DinosaurCollection";

const DEV_MODE = false;
const PRIMARY_COLOR = DEV_MODE ? "#800080" : "#AA0000";
const periods = [
  "Late Triassic",
  "Early Jurassic",
  "Mid Jurassic",
  "Late Jurassic",
  "Early Cretaceous",
  "Late Cretaceous",
];

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
    if (!DEV_MODE) {
      setSelectedCountry(country);
      setIsSidebarOpen(true);
    }
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
      <p className="period-text text-center">{selectedPeriod}</p>
      <div className="content-container">
        <div className={`left-panel ${isSidebarOpen ? "" : "expanded"}`}>
          <div className="globe-container">
            <Globe
              selectedPeriod={selectedPeriod}
              availableLocations={availableLocations}
              onCountryClick={handleCountryClick}
              DEV_MODE={DEV_MODE}
              PRIMARY_COLOR={PRIMARY_COLOR}
            />
          </div>
        </div>
        {!DEV_MODE && isSidebarOpen && selectedCountry && (
          <div className="right-panel">
            <div className="in-period-title">
              Dinosaurs in {selectedCountry} ({selectedPeriod})
            </div>
            <ul className="dino-list">
              {dinosInCountry.map((dino) => (
                <li key={dino.name} className="dino-item">
                  <div className="dino-icon-container">
                    <img
                      src={"images/dinosaurs/" + dino.image}
                      alt={dino.name}
                      className="dino-icon"
                    />
                  </div>
                  {dino.name}
                </li>
              ))}
            </ul>
            <button
              className="close-btn btn btn-light px-2 mb-3"
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
