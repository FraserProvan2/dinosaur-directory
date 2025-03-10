import React, { useRef, useState, useEffect } from "react";
import { useThree, useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { latLonToSphereCoords } from "./utils";

const CountryMarker = ({ country, latLon, PRIMARY_COLOR, onClick }) => {
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
};

export default CountryMarker;
