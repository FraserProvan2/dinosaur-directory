// atoz/DinoPage.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DinosaurCollection from "../../entities/DinosaurCollection";
import DinoFilters from "./DinoFilters";
import DinoList from "./DinoList";
import DinoDetails from "./DinoDetails";

const App = () => {
  const [dinosaurs, setDinosaurs] = useState([]);
  const [filteredDinosaurs, setFilteredDinosaurs] = useState([]);
  const [selectedDino, setSelectedDino] = useState(null);
  const [filterPeriod, setFilterPeriod] = useState("");
  const [filterSubPeriod, setFilterSubPeriod] = useState("");
  const [filterDiet, setFilterDiet] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showFilters, setShowFilters] = useState(false);
  const { dinoSlug } = useParams();
  const navigate = useNavigate();

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Load dinosaurs and set the selected dinosaur based on URL param
  useEffect(() => {
    const dinos = DinosaurCollection.getAllDinosaurs().sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setDinosaurs(dinos);
    setFilteredDinosaurs(dinos);

    if (dinoSlug && dinos.length > 0) {
      const foundDino = dinos.find(
        (d) => d.name.toLowerCase() === dinoSlug.toLowerCase()
      );
      setSelectedDino(foundDino || dinos[0]);
    } else if (dinos.length > 0) {
      setSelectedDino(dinos[0]);
    }
  }, [dinoSlug]);

  // Apply filters to the dinosaur list
  useEffect(() => {
    let filtered = dinosaurs;
    if (filterPeriod)
      filtered = filtered.filter((dino) => dino.period === filterPeriod);
    if (filterSubPeriod)
      filtered = filtered.filter((dino) => dino.fullPeriod === filterSubPeriod);
    if (filterDiet)
      filtered = filtered.filter(
        (dino) => dino.diet.toLowerCase() === filterDiet.toLowerCase()
      );
    if (searchQuery)
      filtered = filtered.filter((dino) =>
        dino.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    setFilteredDinosaurs(filtered);
  }, [filterPeriod, filterSubPeriod, filterDiet, searchQuery, dinosaurs]);

  // Define options for filters
  const periods = ["Triassic", "Jurassic", "Cretaceous"];
  const subPeriodsOrder = ["Early", "Mid", "Late"];
  const subPeriods = filterPeriod
    ? subPeriodsOrder
        .map((sub) => `${sub} ${filterPeriod}`)
        .filter((sub) =>
          dinosaurs.some(
            (d) => d.fullPeriod === sub && d.period === filterPeriod
          )
        )
    : [];
  const diets = Array.from(new Set(dinosaurs.map((d) => d.diet))).map(
    (diet) => diet.charAt(0).toUpperCase() + diet.slice(1).toLowerCase()
  );

  const handleDinoSelect = (dino) => {
    setSelectedDino(dino);
    navigate(`/dinosaur/${dino.name.toLowerCase()}`);
  };

  return (
    <div className="container py-3">
      <div className="row justify-content-center">
        {/* Left Panel: Filters and List */}
        <div className="col-md-3">
          {isMobile && (
            <button
              className="btn btn-primary w-100 mb-3"
              onClick={() => setShowFilters(!showFilters)}
            >
              {showFilters ? "Hide Filters" : "Show Filters"}
            </button>
          )}

          {(!isMobile || showFilters) && (
            <>
              <DinoFilters
                searchQuery={searchQuery}
                onSearchQueryChange={setSearchQuery}
                filterPeriod={filterPeriod}
                onFilterPeriodChange={(val) => {
                  setFilterPeriod(val);
                  setFilterSubPeriod("");
                }}
                filterSubPeriod={filterSubPeriod}
                onFilterSubPeriodChange={setFilterSubPeriod}
                filterDiet={filterDiet}
                onFilterDietChange={setFilterDiet}
                periods={periods}
                subPeriods={subPeriods}
                diets={diets}
              />
              <DinoList
                dinosaurs={filteredDinosaurs}
                selectedDino={selectedDino}
                onDinoSelect={handleDinoSelect}
              />
            </>
          )}
        </div>

        {/* Right Panel: Dinosaur Details */}
        <div className="col-md-5">
          {selectedDino && <DinoDetails dino={selectedDino} />}
        </div>
      </div>
    </div>
  );
};

export default App;
