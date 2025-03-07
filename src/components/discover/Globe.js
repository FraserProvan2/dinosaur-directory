import React, { useState, useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Html, Stars } from "@react-three/drei";
import * as THREE from "three";
import CountriesPosition from "../../data/countries-positions.json";

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
  const theta = -lon * (Math.PI / 180);
  return new THREE.Vector3(
    radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
};

function CountryMarker({ country, initialPosition, PRIMARY_COLOR, onClick }) {
  const { camera } = useThree();
  const markerRef = useRef();
  const labelRef = useRef();
  const [currentPosition] = useState(initialPosition);

  useFrame(() => {
    if (!markerRef.current || !labelRef.current) return;

    const worldPosition = new THREE.Vector3();
    markerRef.current.getWorldPosition(worldPosition);

    const normal = worldPosition.clone().normalize();
    const toCamera = new THREE.Vector3()
      .subVectors(camera.position, worldPosition)
      .normalize();

    const isFacingCamera = normal.dot(toCamera) > 0.1;
    markerRef.current.visible = isFacingCamera;
    labelRef.current.style.display = isFacingCamera ? "block" : "none";
  });

  return (
    <group ref={markerRef} position={currentPosition}>
      <mesh onClick={() => onClick(country)}>
        <sphereGeometry args={[0.05, 32, 32]} />
        <meshStandardMaterial
          color={PRIMARY_COLOR}
          emissive={PRIMARY_COLOR}
          emissiveIntensity={0.7}
        />
      </mesh>
      <Html position={[0, 0.2, 0]}>
        <div
          ref={labelRef}
          className="flag-label"
          onClick={() => onClick(country)}
          style={{ cursor: "pointer" }}
        >
          {country}
        </div>
      </Html>
    </group>
  );
}

function RotatingGlobe({
  selectedPeriod,
  availableLocations,
  onCountryClick,
  PRIMARY_COLOR,
  isSpinning,
  globeSpeed = 0.0003,
  cloudSpeed = 0.0001,
  textures,
}) {
  const countryLatLonMap = CountriesPosition[selectedPeriod] || {};
  const globeRef = useRef();
  const pivotRef = useRef();
  const cloudsRef = useRef();

  useFrame(() => {
    if (pivotRef.current && isSpinning) {
      pivotRef.current.rotation.y += globeSpeed;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += cloudSpeed;
    }
  });

  return (
    <group ref={pivotRef}>
      <group ref={globeRef} position={[0, 0, 0]}>
        <mesh>
          <sphereGeometry args={[2.5, 64, 64]} />
          <meshStandardMaterial map={textures[selectedPeriod]} />
        </mesh>

        {availableLocations.map((country) => {
          if (!countryLatLonMap[country]) return null;
          const position = latLonToSphereCoords(...countryLatLonMap[country]);
          return (
            <CountryMarker
              key={country}
              country={country}
              initialPosition={position}
              PRIMARY_COLOR={PRIMARY_COLOR}
              onClick={onCountryClick}
            />
          );
        })}
      </group>

      <mesh ref={cloudsRef} position={[0, 0, 0]}>
        <sphereGeometry args={[2.55, 64, 64]} />
        <meshStandardMaterial
          map={textures["clouds"]}
          transparent={true}
          opacity={0.8}
        />
      </mesh>
    </group>
  );
}

function Globe({
  selectedPeriod,
  availableLocations,
  onCountryClick,
  PRIMARY_COLOR,
}) {
  const [isSpinning, setIsSpinning] = useState(true);

  // Preload all textures once on initial load
  const textures = useMemo(() => {
    const loader = new THREE.TextureLoader();
    const loadedTextures = {};

    Object.keys(periodTextures).forEach((period) => {
      loadedTextures[period] = loader.load(periodTextures[period]);
    });

    loadedTextures["clouds"] = loader.load("/images/textures/clouds.png");

    return loadedTextures;
  }, []);

  return (
    <div className="globe-container">
      <div className="globe-wrapper">
        <Canvas
          className="globe-canvas"
          camera={{ position: [0, 0, 7], fov: 45 }}
        >
          <ambientLight intensity={2.5} />
          <directionalLight position={[10, 3, 2]} intensity={0.8} />
          <OrbitControls
            enableZoom={true}
            minDistance={4}
            maxDistance={8}
            enablePan={false}
          />
          <Stars
            radius={50}
            depth={50}
            count={2000}
            factor={4}
            saturation={0}
            fade
          />

          <RotatingGlobe
            selectedPeriod={selectedPeriod}
            availableLocations={availableLocations}
            onCountryClick={onCountryClick}
            PRIMARY_COLOR={PRIMARY_COLOR}
            isSpinning={isSpinning}
            cloudSpeed={0.00006}
            textures={textures}
          />
        </Canvas>

        <button
          onClick={() => setIsSpinning(!isSpinning)}
          className="globe-pause-btn"
        >
          {isSpinning ? "⏸" : "▶"}
        </button>
      </div>
    </div>
  );
}

export default Globe;
