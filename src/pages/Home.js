import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";
import DinosaurCollection from "../entities/DinosaurCollection";

const periodTextures = {
  "Late Triassic": "/images/textures/late_triassic.jpg",
  "Early Jurassic": "/images/textures/early_jurassic.jpg",
  "Mid Jurassic": "/images/textures/mid_jurassic.jpg",
  "Late Jurassic": "/images/textures/late_jurassic.jpg",
  "Early Cretaceous": "/images/textures/early_cretaceous.jpg",
  "Late Cretaceous": "/images/textures/late_cretaceous.jpg",
};

// Placeholder: Realistic lat/lon for each country (to be improved)
const countryLatLonMap = {
  USA: [38, -97],
  Canada: [56, -106],
  England: [52, -1],
  France: [46, 2],
  Germany: [51, 10],
  China: [35, 104],
  Mongolia: [46, 105],
  Argentina: [-34, -64],
  Brazil: [-14, -51],
  Morocco: [31, -7],
  "South Africa": [-30, 25],
  Australia: [-25, 133],
  India: [20, 78],
  Russia: [60, 100],
  Portugal: [39, -8],
  Spain: [40, -3],
  Mexico: [23, -102],
};

// Convert lat/lon to 3D sphere coordinates
const latLonToSphereCoords = (lat, lon, radius = 2.2) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
};

function Globe({ selectedPeriod, onCountryClick }) {
  const allCountries = DinosaurCollection.getAllCountries();

  return (
    <Canvas className="globe-canvas">
      <ambientLight intensity={0.8} />
      <OrbitControls enablePan={false} />
      <mesh>
        <sphereGeometry args={[2.5, 64, 64]} />{" "}
        {/* Larger for better visibility */}
        <meshStandardMaterial
          map={new THREE.TextureLoader().load(periodTextures[selectedPeriod])}
        />
      </mesh>

      {/* Render flags with proper occlusion */}
      {Object.keys(allCountries).map((country) => {
        if (!countryLatLonMap[country]) return null;
        if (!allCountries[country].includes(selectedPeriod)) return null;

        const position = latLonToSphereCoords(...countryLatLonMap[country]);

        return (
          <mesh
            key={country}
            position={position}
            onClick={() => onCountryClick(country, selectedPeriod)}
          >
            <planeGeometry args={[0.25, 0.15]} /> {/* Adjusted size */}
            <meshStandardMaterial color="red" side={THREE.FrontSide} />
            <Html occlude>
              <span className="flag-label">{country}</span>
            </Html>
          </mesh>
        );
      })}
    </Canvas>
  );
}

function Home() {
  const periods = [
    "Late Triassic",
    "Early Jurassic",
    "Mid Jurassic",
    "Late Jurassic",
    "Early Cretaceous",
    "Late Cretaceous",
  ];
  const [selectedPeriod, setSelectedPeriod] = useState(periods[0]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isInfoCollapsed, setIsInfoCollapsed] = useState(false);
  const allDinosaurs = DinosaurCollection.getAllDinosaurs();

  const dinosInCountry = selectedCountry
    ? allDinosaurs.filter(
        (dino) =>
          dino.foundIn.includes(selectedCountry) &&
          dino.fullPeriod === selectedPeriod
      )
    : [];

  return (
    <div className="home-container">
      <h2 className="title">Discover the Mesozoic Era</h2>
      <input
        type="range"
        min="0"
        max={periods.length - 1}
        step="1"
        value={periods.indexOf(selectedPeriod)}
        onChange={(e) => setSelectedPeriod(periods[e.target.value])}
        className="period-slider"
      />
      <p className="period-text">{selectedPeriod}</p>

      {/* temp button for debug info panel open/close */}
      <button
        className="toggle-btn"
        onClick={() => setIsInfoCollapsed(!isInfoCollapsed)}
      >
        {isInfoCollapsed ? "Expand Info" : "Collapse Info"}
      </button>

      <div className="content-container">
        <div className={`left-panel ${isInfoCollapsed ? "expanded" : ""}`}>
          <div className="globe-container">
            <Globe
              selectedPeriod={selectedPeriod}
              onCountryClick={setSelectedCountry}
            />
          </div>
        </div>

        {!isInfoCollapsed && (
          <div className="right-panel">
            {!isInfoCollapsed ? (
              <>
                <ul className="dino-list">
                  {dinosInCountry.map((dino) => (
                    <li key={dino.name} className="dino-item">
                      <img
                        src={dino.image}
                        alt={dino.name}
                        className="dino-icon"
                      />
                      {dino.name}
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <p className="info-text">Select a country to see dinosaurs</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
