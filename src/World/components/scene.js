import { Color, Scene, Fog } from 'three';

function createScene(color) {
  const scene = new Scene();
  scene.background = new Color(color);
  scene.fog = new Fog(color, 20, 90);
  return scene;
}

export { createScene };
