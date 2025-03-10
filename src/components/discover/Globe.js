import React, { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import LoadingPlaceholder from "./LoadingPlaceholder";
import TexturePreloader from "./TexturePreloader";
import RotatingGlobe from "./RotatingGlobe";
import { GLOBE_AMBIENT_LIGHT, GLOBE_BRIGHTNESS } from "./globeUtils";

const Globe = ({
  selectedPeriod,
  availableLocations,
  onCountryClick,
  PRIMARY_COLOR,
}) => {
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
};

export default Globe;
