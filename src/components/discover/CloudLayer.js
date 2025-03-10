import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const CloudLayer = ({ texture, cloudSpeed }) => {
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
};

export default CloudLayer;
