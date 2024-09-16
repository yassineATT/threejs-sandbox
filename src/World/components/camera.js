import { PerspectiveCamera } from "three";

function createCamera() {
  const camera = new PerspectiveCamera(
    35, // fov = Field Of View / angle de vue
    1, // aspect ratio (dummy value) / ratio de l'écran
    0.1, // near clipping plane / distance de début de rendu
    100 // far clipping plane / distance de fin de rendu
  );

  // Déplacer la caméra pour qu'elle soit en face de la scène
  camera.position.set(0, 0, 100);
  camera.tick = (delta) => {};

  return camera;
}

export { createCamera };
