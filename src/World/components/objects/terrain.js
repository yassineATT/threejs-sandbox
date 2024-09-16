import * as THREE from 'three';


function createTerrain(props) {
  const loader = new THREE.TextureLoader();
  const height = loader.load("textures/height.png");

  const geometry = new THREE.PlaneGeometry(150, 150, 64, 64);

  const material = new THREE.MeshStandardMaterial({
    color: props.color,
    flatShading: true, // pour avoir un rendu plat
    displacementMap: height, // pour déformer le plan en fonction de la texture
    displacementScale: 5, // intensité de la déformation
  });

  const plane = new THREE.Mesh(geometry, material);
  plane.position.set(0, 0, 0);
  plane.rotation.x -= Math.PI * 0.35;

  let frame = 0;
  plane.tick = (delta) => {};
  return plane;
}

export { createTerrain };
