import React, { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import GlobeSurface from "./GlobeSurface";
import CloudLayer from "./CloudLayer";
import CountryMarker from "./CountryMarker";
import { periodTextures } from "./globeUtils";
import CountriesPosition from "../../data/countries-positions.json";

const RotatingGlobe = ({
  selectedPeriod,
  availableLocations,
  onCountryClick,
  PRIMARY_COLOR,
  isSpinning,
  globeSpeed = 0.0003,
  cloudSpeed = 0.0001,
  loadedTextures,
}) => {
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
};

export default RotatingGlobe;
