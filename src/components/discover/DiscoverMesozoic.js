import React, { useState, useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import * as THREE from "three";
import DinosaurCollection from "../../entities/DinosaurCollection";
import CountriesPosition from "../../data/countries-positions.json";

const DEV_MODE = false;
const PRIMARY_COLOR = DEV_MODE ? "#800080" : "#AA0000";

const periodTextures = {
  "Late Triassic": "/images/textures/late_triassic.jpg",
  "Early Jurassic": "/images/textures/early_jurassic.jpg",
  "Mid Jurassic": "/images/textures/mid_jurassic.jpg",
  "Late Jurassic": "/images/textures/late_jurassic.jpg",
  "Early Cretaceous": "/images/textures/early_cretaceous.jpg",
  "Late Cretaceous": "/images/textures/late_cretaceous.jpg",
};

const latLonToSphereCoords = (lat, lon, radius = 2.5) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (-lon) * (Math.PI / 180);
  return new THREE.Vector3(
    radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
};

function CountryMarker({ country, initialPosition, onClick }) {
  const { camera } = useThree();
  const markerRef = useRef();
  const labelRef = useRef();
  const isDragging = useRef(false);
  const [currentPosition, setCurrentPosition] = useState(
    initialPosition || new THREE.Vector3(0, 0, 2.5)
  );

  useFrame(({ raycaster, mouse }) => {
    if (!markerRef.current || !labelRef.current || !currentPosition) return;

    const normal = currentPosition.clone().normalize();
    const toCamera = new THREE.Vector3().subVectors(camera.position, currentPosition).normalize();
    const isFacingCamera = normal.dot(toCamera) > 0.1;

    markerRef.current.visible = isFacingCamera;
    labelRef.current.style.display = isFacingCamera ? "block" : "none";

    if (isDragging.current) {
      raycaster.setFromCamera(mouse, camera);
      const intersection = raycaster.intersectObject(markerRef.current);
      if (intersection.length > 0) {
        const newPos = intersection[0].point;
        const lat = 90 - Math.acos(newPos.y / 2.5) * (180 / Math.PI);
        const lon = -Math.atan2(newPos.z, newPos.x) * (180 / Math.PI);
        setCurrentPosition(latLonToSphereCoords(lat, lon));
        console.log(`"${country}": [${lat.toFixed(4)}, ${lon.toFixed(4)}]`);
      }
    }
  });

  return (
    <group ref={markerRef} position={currentPosition}>
      <mesh
        onPointerDown={(event) => {
          if (DEV_MODE) isDragging.current = true;
          event.stopPropagation();
        }}
        onPointerUp={(event) => {
          isDragging.current = false;
          event.stopPropagation();
          onClick(country);
        }}
      >
        <sphereGeometry args={[0.05, 32, 32]} />
        <meshStandardMaterial color={PRIMARY_COLOR} emissive={PRIMARY_COLOR} emissiveIntensity={0.7} />
      </mesh>
      <Html position={[0, 0.2, 0]}>
        <div ref={labelRef} className="flag-label clickable" onClick={() => onClick(country)}>
          {country}
        </div>
      </Html>
    </group>
  );
}

function Globe({ selectedPeriod, availableLocations, onCountryClick }) {
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
          <CountryMarker
            key={country}
            country={country}
            initialPosition={position}
            onClick={onCountryClick}
          />
        );
      })}
    </Canvas>
  );
}

function DiscoverMesozoic() {
  const periods = Object.keys(periodTextures);
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
        (dino) => dino.foundIn.includes(selectedCountry) && dino.fullPeriod === selectedPeriod
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
            <Globe selectedPeriod={selectedPeriod} availableLocations={availableLocations} onCountryClick={handleCountryClick} />
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
                    <img src={"images/dinosaurs/" + dino.image} alt={dino.name} className="dino-icon" />
                  </div>
                  {dino.name}
                </li>
              ))}
            </ul>
            <button className="close-btn btn btn-light px-2 mb-3" onClick={closeSidebar}>
              ➦ Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default DiscoverMesozoic;
