import React from "react";
import { GLOBE_ROUGHNESS, GLOBE_METALNESS, GLOBE_OVERLAY } from "./utils";

const GlobeSurface = ({ texture }) => {
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
};

export default GlobeSurface;
