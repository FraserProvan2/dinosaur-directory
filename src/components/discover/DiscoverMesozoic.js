import React, { useState, useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";
import DinosaurCollection from "../../entities/DinosaurCollection";
import CountriesPosition from "../../data/countries-positions.json";

const PRIMARY_COLOR = "#AA0000";

const periodTextures = {
  "Late Triassic": "/images/textures/late_triassic.jpg",
  "Early Jurassic": "/images/textures/early_jurassic.jpg",
  "Mid Jurassic": "/images/textures/mid_jurassic.jpg",
  "Late Jurassic": "/images/textures/late_jurassic.jpg",
  "Early Cretaceous": "/images/textures/early_cretaceous.jpg",
  "Late Cretaceous": "/images/textures/late_cretaceous.jpg",
};

const latLonToSphereCoords = (lat, lon, radius = 2.5) => {
  const phi = (90 - lat) * (Math.PI / 180); // Correctly map latitude to spherical coordinates
  const theta = (-lon) * (Math.PI / 180);  // Negative longitude to align correctly with map
  return new THREE.Vector3(
    radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
};

function CountryMarker({ country, position, onCountryClick }) {
  const { camera } = useThree();
  const markerRef = useRef();
  const labelRef = useRef();
  const lightDirection = new THREE.Vector3(0.5, 1, 0).normalize();

  useFrame(() => {
    if (markerRef.current && labelRef.current && camera) {
      const normal = position.clone().normalize();
      const toCamera = new THREE.Vector3()
        .subVectors(camera.position, position)
        .normalize();
      const isLit = normal.dot(lightDirection) > 0;
      const isFacingCamera = normal.dot(toCamera) > 0.1;
      const isVisible = isLit && isFacingCamera;
      markerRef.current.visible = isVisible;
      labelRef.current.style.display = isVisible ? "block" : "none";
    }
  });

  return (
    <group ref={markerRef} position={position} onClick={() => onCountryClick(country)}>
      <mesh>
        <sphereGeometry args={[0.05, 32, 32]} />
        <meshStandardMaterial color={PRIMARY_COLOR} emissive={PRIMARY_COLOR} emissiveIntensity={0.7} />
      </mesh>
      <Html position={[0, 0.2, 0]}>
        <div ref={labelRef} className="flag-label clickable" onClick={() => onCountryClick(country)}>
          {country}
        </div>
      </Html>
    </group>
  );
}

function Globe({ selectedPeriod, onCountryClick, availableLocations }) {
  const countryLatLonMap = CountriesPosition[selectedPeriod] || {};

  return (
    <Canvas className="globe-canvas" camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={3} />
      <directionalLight position={[10, 3, 2]} intensity={0.9} />
      <OrbitControls enablePan={false} />
      <mesh>
        <sphereGeometry args={[2.5, 64, 64]} />
        <meshStandardMaterial map={new THREE.TextureLoader().load(periodTextures[selectedPeriod])} />
      </mesh>
      {availableLocations.map((country) => {
        if (!countryLatLonMap[country]) return null;
        const position = latLonToSphereCoords(...countryLatLonMap[country]);
        return (
          <CountryMarker key={country} country={country} position={position} onCountryClick={onCountryClick} />
        );
      })}
    </Canvas>
  );
}

function DiscoverMesozoic() {
  const periods = Object.keys(periodTextures);
  const [selectedPeriod, setSelectedPeriod] = useState(periods[0]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isInfoCollapsed, setIsInfoCollapsed] = useState(false);
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

  useEffect(() => {
    setIsInfoCollapsed(true);
    setSelectedCountry(null);
  }, [selectedPeriod]);

  const dinosInCountry = selectedCountry
    ? allDinosaurs.current.filter(
        (dino) =>
          dino.foundIn.includes(selectedCountry) &&
          dino.fullPeriod === selectedPeriod
      )
    : [];

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
        <div className={`left-panel ${isInfoCollapsed ? "expanded" : ""}`}>
          <div className="globe-container">
            <Globe
              selectedPeriod={selectedPeriod}
              onCountryClick={(country) => {
                setSelectedCountry(country);
                setIsInfoCollapsed(false);
              }}
              availableLocations={availableLocations}
            />
          </div>
        </div>
        {!isInfoCollapsed && (
          <div className="right-panel">
            {selectedCountry ? (
              <>
                <div className="in-period-title">
                  Dinosaurs in {selectedCountry} ({selectedPeriod})
                </div>
                <ul className="dino-list">
                  {dinosInCountry.map((dino) => (
                    <li key={dino.name} className="dino-item">
                      <div className="dino-icon-container">
                        <img src={"images/dinosaurs/" + dino.image} alt={dino.name} className="dino-icon" />
                      </div>
                      {dino.name}
                    </li>
                  ))}
                </ul>
                <button className="toggle-btn btn btn-light px-2 mb-3" onClick={() => setIsInfoCollapsed(true)}>
                  ➦ Close
                </button>
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

export default DiscoverMesozoic;
