import { useMemo } from "react";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { periodTextures } from "./globeUtils";

const TexturePreloader = ({ onLoadComplete }) => {
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
};

export default TexturePreloader;
