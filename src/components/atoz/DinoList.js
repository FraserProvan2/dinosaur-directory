import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DinosaurCollection from "../../entities/DinosaurCollection";

const DinoPage = () => {
  const [dinosaurs, setDinosaurs] = useState([]);
  const [filteredDinosaurs, setFilteredDinosaurs] = useState([]);
  const [selectedDino, setSelectedDino] = useState(null);
  const [filterPeriod, setFilterPeriod] = useState("");
  const [filterSubPeriod, setFilterSubPeriod] = useState("");
  const [filterDiet, setFilterDiet] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showFilters, setShowFilters] = useState(false);
  const scrollContainerRef = useRef(null);
  const { dinoSlug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const getDietPillClass = (diet) => {
    const dietLower = diet.toLowerCase();
    if (dietLower.includes("herb")) return "herb";
    if (dietLower.includes("carn")) return "carn";
    return "default";
  };

  return (
    <div className="container py-3">
      <div className="row justify-content-center">
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
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search dinosaurs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="scroll-section mb-3">
                <div className="rolling-list-container">
                  <div className="gradient-overlay top"></div>
                  <div className="gradient-overlay bottom"></div>
                  <div className="rolling-list" ref={scrollContainerRef}>
                    {filteredDinosaurs.map((dino) => (
                      <div
                        key={dino.name}
                        className={`list-item ${
                          selectedDino?.name === dino.name ? "active-item" : ""
                        }`}
                        onClick={() => {
                          setSelectedDino(dino);
                          navigate(`/dinosaur/${dino.name.toLowerCase()}`);
                        }}
                      >
                        {dino.name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="filters-section mb-3">
                <div className="filters-text">Filters</div>
                <select
                  className="form-control mb-2"
                  value={filterPeriod}
                  onChange={(e) => {
                    setFilterPeriod(e.target.value);
                    setFilterSubPeriod("");
                  }}
                >
                  <option value="">All Periods</option>
                  {periods.map((period) => (
                    <option key={period} value={period}>
                      {period}
                    </option>
                  ))}
                </select>

                {filterPeriod && filterPeriod !== "Late Triassic" && (
                  <select
                    className="form-control mb-2"
                    value={filterSubPeriod}
                    onChange={(e) => setFilterSubPeriod(e.target.value)}
                  >
                    <option value="">All Subperiods</option>
                    {subPeriods.map((sub) => (
                      <option key={sub} value={sub}>
                        {sub}
                      </option>
                    ))}
                  </select>
                )}

                <select
                  className="form-control"
                  value={filterDiet}
                  onChange={(e) => setFilterDiet(e.target.value)}
                >
                  <option value="">All Diets</option>
                  {diets.map((diet) => (
                    <option key={diet} value={diet}>
                      {diet}
                    </option>
                  ))}
                </select>
              </div>
            </>
          )}
        </div>

        <div className="col-md-5">
          {selectedDino ? (
            <>
              <div className="dino-container">
                <div class="dinosaur-header">
                  <h2 className=" text-primary">{selectedDino.name}</h2>
                  <p class="pronunciation text-muted text-sm">
                    ({selectedDino.pronunciation})
                  </p>
                </div>
                <img
                  src={`/images/dinosaurs/${selectedDino.image}`}
                  alt={selectedDino.name}
                  className="img-fluid dino-listing-image mb-3"
                />
                <div className="dino-details">
                  <div className="card-body">
                    <p className="card-text">
                      <p className="card-text">
                        <strong>Diet:</strong>{" "}
                        <span
                          className={`diet-pill ${getDietPillClass(
                            selectedDino.diet
                          )}`}
                        >
                          {selectedDino.diet}
                        </span>
                      </p>
                      <strong>Period:</strong> {selectedDino.fullPeriod} (
                      {selectedDino.yearsMya.start}-{selectedDino.yearsMya.end}{" "}
                      MYA)
                    </p>
                    <p className="card-text">
                      <strong>Meaning:</strong> {selectedDino.meaning}
                    </p>
                    <p className="card-text">
                      <strong>Length:</strong> {selectedDino.lengthMeters}{" "}
                      meters
                    </p>
                    <p className="card-text">
                      <strong>Found In:</strong>{" "}
                      {selectedDino.foundIn.join(", ")}
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DinoPage;
