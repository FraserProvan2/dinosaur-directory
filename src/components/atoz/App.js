import React, { useState, useEffect, useMemo } from "react";
import { Helmet } from "react-helmet-async";
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

  const filterDinosaurs = (
    dinosaurs,
    filterPeriod,
    filterSubPeriod,
    filterDiet,
    searchQuery
  ) => {
    let filtered = dinosaurs;
    if (filterPeriod) {
      filtered = filtered.filter((dino) => dino.getPeriod() === filterPeriod);
    }
    if (filterSubPeriod) {
      filtered = filtered.filter(
        (dino) => dino.getFullPeriod() === filterSubPeriod
      );
    }
    if (filterDiet) {
      filtered = filtered.filter(
        (dino) => dino.getDiet().toLowerCase() === filterDiet.toLowerCase()
      );
    }
    if (searchQuery) {
      filtered = filtered.filter((dino) =>
        dino.getName().toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return filtered;
  };

  const getSubPeriods = (dinosaurs, filterPeriod) => {
    const subPeriodsOrder = ["Early", "Mid", "Late"];
    return filterPeriod
      ? subPeriodsOrder
          .map((sub) => `${sub} ${filterPeriod}`)
          .filter((sub) =>
            dinosaurs.some(
              (d) => d.getFullPeriod() === sub && d.getPeriod() === filterPeriod
            )
          )
      : [];
  };

  const getDietOptions = (dinosaurs) => {
    return Array.from(new Set(dinosaurs.map((d) => d.getDiet()))).map(
      (diet) =>
        diet.charAt(0).toUpperCase() + diet.slice(1).toLowerCase()
    );
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const dinos = DinosaurCollection.getAllDinosaurs().sort((a, b) =>
      a.getNameLower().localeCompare(b.getNameLower())
    );
    setDinosaurs(dinos);
    setFilteredDinosaurs(dinos);
    if (dinoSlug && dinos.length > 0) {
      const foundDino = dinos.find(
        (d) => d.getNameLower() === dinoSlug.toLowerCase()
      );
      if (!foundDino) {
        // Redirect to 404 if the dinosaur doesn't exist
        navigate("/404", { replace: true });
        return;
      }
      setSelectedDino(foundDino);
    } else if (dinos.length > 0) {
      setSelectedDino(dinos[0]);
    }
  }, [dinoSlug, navigate]);

  useEffect(() => {
    setFilteredDinosaurs(
      filterDinosaurs(
        dinosaurs,
        filterPeriod,
        filterSubPeriod,
        filterDiet,
        searchQuery
      )
    );
  }, [dinosaurs, filterPeriod, filterSubPeriod, filterDiet, searchQuery]);

  const periods = ["Triassic", "Jurassic", "Cretaceous"];
  const subPeriods = getSubPeriods(dinosaurs, filterPeriod);
  const diets = getDietOptions(dinosaurs);

  const handleDinoSelect = (dino) => {
    setSelectedDino(dino);
    navigate(`/dinosaur/${dino.getNameLower()}`);
  };

  const { pageTitle, pageDescription, canonicalUrl, imageUrl } = useMemo(() => {
    const title = selectedDino
      ? `${selectedDino.name} - dinosaur.directory`
      : "Dinosaur A–Z - dinosaur.directory";
    const description = selectedDino
      ? `Learn about ${selectedDino.name}, a ${selectedDino.diet} dinosaur from the ${selectedDino.period} period. Pronounced ${selectedDino.pronunciation}. Meaning: ${selectedDino.meaning}.`
      : "Explore an alphabetical directory of dinosaurs on dinosaur.directory. Discover detailed information, interactive filters, and stunning visuals.";
    const canonical = selectedDino
      ? `https://dinosaur.directory/dinosaur/${selectedDino.name.toLowerCase()}`
      : "https://dinosaur.directory/a-z";
    const imgUrl = selectedDino
      ? `https://dinosaur.directory/path-to-dinosaur-images/${selectedDino.image}`
      : "https://dinosaur.directory/path-to-default-image.jpg";

    return {
      pageTitle: title,
      pageDescription: description,
      canonicalUrl: canonical,
      imageUrl: imgUrl,
    };
  }, [selectedDino]);

  return (
    <>
      <Helmet>
        {/* Standard Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={imageUrl} />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dinosaur_directory" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={imageUrl} />
      </Helmet>
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
          <div className="col-md-5">
            {selectedDino && <DinoDetails dino={selectedDino} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
