// le renderer est un système qui va permettre de dessiner la scène 3D dans le canvas HTML
import { WebGLRenderer } from "three";

function createRenderer() {
  const renderer = new WebGLRenderer({ antialias: true });
  renderer.physicallyCorrectLights = true;
  return renderer;
}

export { createRenderer };
