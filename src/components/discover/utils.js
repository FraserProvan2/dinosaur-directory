import * as THREE from "three";

// Globe Customisation
export const GLOBE_BRIGHTNESS = 0.8;
export const GLOBE_AMBIENT_LIGHT = 0.5;
export const GLOBE_ROUGHNESS = 0.8;
export const GLOBE_METALNESS = 0.3;
export const GLOBE_OVERLAY = "#d1d1d1";

// Texture mapping for geological periods
export const periodTextures = {
  "Late Triassic": "/images/textures/late_triassic.jpg",
  "Early Jurassic": "/images/textures/early_jurassic.jpg",
  "Mid Jurassic": "/images/textures/mid_jurassic.jpg",
  "Late Jurassic": "/images/textures/late_jurassic.jpg",
  "Early Cretaceous": "/images/textures/early_cretaceous.jpg",
  "Late Cretaceous": "/images/textures/late_cretaceous.jpg",
};

// Convert latitude/longitude to sphere coordinates.
export const latLonToSphereCoords = (lat, lon, radius = 2.5) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = -lon * (Math.PI / 180);
  return new THREE.Vector3(
    radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
};
