import React, { useState, useEffect, Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tooltip } from "bootstrap";
import LoadingPlaceholder from "./LoadingPlaceholder";
import TexturePreloader from "./TexturePreloader";
import RotatingGlobe from "./RotatingGlobe";
import { GLOBE_AMBIENT_LIGHT, GLOBE_BRIGHTNESS } from "./utils";

const Globe = ({
  selectedPeriod,
  availableLocations,
  onCountryClick,
  PRIMARY_COLOR,
}) => {
  const [isSpinning, setIsSpinning] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedTextures, setLoadedTextures] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const globeRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("globeTooltipShown")) {
      const tooltip = new Tooltip(globeRef.current, {
        title: "Click on a country to uncover its ancient dinosaurs!",
        placement: "top",
        trigger: "manual",
      });
      setTimeout(() => {
        tooltip.show();
      }, 9000);
      localStorage.setItem("globeTooltipShown", "true");
      
      setTimeout(() => {
        tooltip.hide();
      }, 15000);
    }
  }, []);

  const handleTexturesLoaded = (textureMap) => {
    setLoadedTextures(textureMap);
    setIsLoading(false);
  };

  return (
    <div className="globe-container">
      <div className="globe-wrapper" ref={globeRef}>
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
          <directionalLight position={[10, 3, 2]} intensity={GLOBE_BRIGHTNESS} />
          <OrbitControls
            enableZoom={true}
            minDistance={4}
            maxDistance={8}
            enablePan={false}
            enableDamping={true}
            dampingFactor={isMobile ? 0.05 : 0.1}
            rotateSpeed={isMobile ? 0.3 : 1}
          />
          <Stars radius={50} depth={50} count={1000} factor={4} saturation={0} fade />
          <Suspense fallback={<LoadingPlaceholder />}>
            <TexturePreloader onLoadComplete={handleTexturesLoaded} />
            {loadedTextures && (
              <RotatingGlobe
                selectedPeriod={selectedPeriod}
                availableLocations={availableLocations}
                onCountryClick={onCountryClick}
                PRIMARY_COLOR={PRIMARY_COLOR}
                isSpinning={isSpinning}
                cloudSpeed={isMobile ? 0.00003 : 0.00006}
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
