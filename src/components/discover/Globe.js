import React, { useState, useRef, useEffect, Suspense, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, Html, Stars, useTexture } from "@react-three/drei";
import * as THREE from "three";
import CountriesPosition from "../../data/countries-positions.json";

// Globe Customisation
const GLOBE_BRIGHTNESS = 0.8;
const GLOBE_AMBIENT_LIGHT = 1;
const GLOBE_ROUGHNESS = 0.8;
const GLOBE_METALNESS = 0.3;
const GLOBE_OVERLAY = "#f0f0f0";

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

function CountryMarker({ country, latLon, PRIMARY_COLOR, onClick }) {
  const { camera } = useThree();
  const markerRef = useRef();
  const labelRef = useRef();
  const [position, setPosition] = useState(latLonToSphereCoords(...latLon));

  useEffect(() => {
    setPosition(latLonToSphereCoords(...latLon));
  }, [latLon]);

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
    <group ref={markerRef} position={position}>
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

function TexturePreloader({ onLoadComplete }) {
  const textureUrls = useMemo(() => {
    const urls = Object.values(periodTextures);

    urls.push("/images/textures/clouds.png");
    return urls;
  }, []);

  useTexture(textureUrls, (textures) => {
    textures.forEach((texture) => {
      texture.minFilter = THREE.LinearFilter;
      texture.generateMipmaps = false;
    });

    const textureMap = {};
    textureUrls.forEach((url, index) => {
      textureMap[url] = textures[index];
    });

    onLoadComplete(textureMap);
  });

  return null;
}

function GlobeSurface({ texture }) {
  return (
    <mesh>
      <sphereGeometry args={[2.5, 64, 64]} />
      <meshStandardMaterial
        map={texture}
        roughness={GLOBE_ROUGHNESS}
        metalness={GLOBE_METALNESS}
        envMapIntensity={0.5}
        color={GLOBE_OVERLAY}
      />
    </mesh>
  );
}

function CloudLayer({ texture, cloudSpeed }) {
  const cloudRef = useRef();

  useFrame(() => {
    if (cloudRef.current) {
      cloudRef.current.rotation.y += cloudSpeed;
    }
  });

  return (
    <mesh ref={cloudRef}>
      <sphereGeometry args={[2.55, 64, 64]} />
      <meshStandardMaterial
        map={texture}
        transparent={true}
        opacity={0.8}
        depthWrite={false}
      />
    </mesh>
  );
}

function LoadingPlaceholder() {
  return (
    <mesh>
      <sphereGeometry args={[2.5, 64, 64]} />
      <meshStandardMaterial color="#436b8c" />
    </mesh>
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
  loadedTextures,
}) {
  const pivotRef = useRef();
  const [currentData, setCurrentData] = useState({});

  useEffect(() => {
    if (CountriesPosition[selectedPeriod]) {
      setCurrentData({ ...CountriesPosition[selectedPeriod] });
    }
  }, [selectedPeriod]);

  useEffect(() => {
    if (pivotRef.current) {
      const PIVOT_INCREASE = 0.4;
      pivotRef.current.rotation.y = Math.PI + PIVOT_INCREASE * Math.PI;
    }
  }, []);

  useFrame(() => {
    if (pivotRef.current && isSpinning) {
      pivotRef.current.rotation.y += globeSpeed;
    }
  });

  const currentTexture = loadedTextures[periodTextures[selectedPeriod]];
  const cloudTexture = loadedTextures["/images/textures/clouds.png"];

  return (
    <group ref={pivotRef}>
      <group position={[0, 0, 0]}>
        {currentTexture && <GlobeSurface texture={currentTexture} />}

        {availableLocations.map((country) => {
          if (!currentData[country]) return null;
          return (
            <CountryMarker
              key={`${selectedPeriod}-${country}-${currentData[country].join(
                "-"
              )}`}
              country={country}
              latLon={currentData[country]}
              PRIMARY_COLOR={PRIMARY_COLOR}
              onClick={onCountryClick}
            />
          );
        })}
      </group>

      {cloudTexture && (
        <CloudLayer texture={cloudTexture} cloudSpeed={cloudSpeed} />
      )}
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
  const [isLoading, setIsLoading] = useState(true);
  const [loadedTextures, setLoadedTextures] = useState(null);

  const handleTexturesLoaded = (textureMap) => {
    setLoadedTextures(textureMap);
    setIsLoading(false);
  };

  return (
    <div className="globe-container">
      <div className="globe-wrapper">
        <Canvas
          className="globe-canvas"
          camera={{ position: [0, 0, 7], fov: 45 }}
          onCreated={({ gl }) => {
            gl.physicallyCorrectLights = true;
            gl.outputColorSpace = THREE.SRGBColorSpace;
            gl.powerPreference = "high-performance";
          }}
        >
          <ambientLight intensity={GLOBE_AMBIENT_LIGHT} />
          <directionalLight
            position={[10, 3, 2]}
            intensity={GLOBE_BRIGHTNESS}
          />
          <OrbitControls
            enableZoom={true}
            minDistance={4}
            maxDistance={8}
            enablePan={false}
            enableDamping={true}
            dampingFactor={0.1}
          />
          <Stars
            radius={50}
            depth={50}
            count={1000}
            factor={4}
            saturation={0}
            fade
          />

          <Suspense fallback={<LoadingPlaceholder />}>
            <TexturePreloader onLoadComplete={handleTexturesLoaded} />

            {loadedTextures && (
              <RotatingGlobe
                selectedPeriod={selectedPeriod}
                availableLocations={availableLocations}
                onCountryClick={onCountryClick}
                PRIMARY_COLOR={PRIMARY_COLOR}
                isSpinning={isSpinning}
                cloudSpeed={0.00006}
                loadedTextures={loadedTextures}
              />
            )}
          </Suspense>
        </Canvas>

        <button
          onClick={() => setIsSpinning(!isSpinning)}
          className="globe-pause-btn"
          disabled={isLoading}
        >
          {isSpinning ? "⏸" : "▶"}
        </button>
      </div>
    </div>
  );
}

export default Globe;
