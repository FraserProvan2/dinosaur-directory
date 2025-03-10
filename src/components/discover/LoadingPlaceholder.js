import React from "react";

const LoadingPlaceholder = () => {
  return (
    <mesh>
      <sphereGeometry args={[2.5, 64, 64]} />
      <meshStandardMaterial color="#436b8c" />
    </mesh>
  );
};

export default LoadingPlaceholder;
