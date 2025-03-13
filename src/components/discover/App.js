import React, { useState, useEffect, useRef } from "react";
import Globe from "./Globe";
import DinosaurSidebar from "./DinosaurSidebar";
import PeriodSelector from "./PeriodSelector";
import DinosaurCollection from "../../entities/DinosaurCollection";
import fullPeriods from "../../data/full-periods.json";

const periods = Object.keys(fullPeriods);
const PRIMARY_COLOR = "#28a745";

const App = () => {
  const [selectedPeriod, setSelectedPeriod] = useState(periods[0]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const allDinosaurs = useRef(DinosaurCollection.getAllDinosaurs());
  const [availableLocations, setAvailableLocations] = useState([]);

  useEffect(() => {
    setAvailableLocations(
      allDinosaurs.current.reduce((acc, dino) => {
        if (dino.getFullPeriod() === selectedPeriod) {
          dino.getFoundIn().forEach((location) => {
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
          dino.getFoundIn().includes(selectedCountry) &&
          dino.getFullPeriod() === selectedPeriod
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
      <PeriodSelector
        periods={periods}
        selectedPeriod={selectedPeriod}
        onChange={setSelectedPeriod}
      />
      <div className="period-years text-center">
        (<b>{fullPeriods[selectedPeriod]}</b> ~ million years ago)
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
          <DinosaurSidebar
            selectedCountry={selectedCountry}
            selectedPeriod={selectedPeriod}
            dinosInCountry={dinosInCountry}
            closeSidebar={closeSidebar}
          />
        )}
      </div>
    </div>
  );
};

export default App;
