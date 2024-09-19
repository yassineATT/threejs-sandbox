import * as THREE from "three";

function createTerrain(props) {
  const loader = new THREE.TextureLoader();
  const height = loader.load("textures/height.png");

  //                           width, height, widthSegments (maillage), heightSegments(maillage)
  const geometry = new THREE.PlaneGeometry(150, 150, 64, 64);

  const material = new THREE.MeshStandardMaterial({
    color: props.color,
    flatShading: true, // pour avoir un rendu plat
    displacementMap: height, // pour déformer le plan en fonction de la texture
    displacementScale: 8, // intensité de la déformation
  });

  const plane = new THREE.Mesh(geometry, material);
  plane.position.set(0, 0, 20);
  plane.rotation.x -= Math.PI * 0.5;

  plane.geometry.attributes.position.originalPosition =
    plane.geometry.attributes.position.array;
  const { array } = plane.geometry.attributes.position;

  for (let i = 0; i < array.length; i += 3) {
    props.randVertexArr.push(Math.random());
  }

  plane.geometry.attributes.position.randomValues = props.randVertexArr;

  let frame = 0;
  plane.tick = (delta) => {
    frame += 0.1;
    const { array, originalPosition, randomValues } =
      plane.geometry.attributes.position;
    for (let i = 0; i < array.length; i += 3) {
      array[i + 2] =
        originalPosition[i + 2] + Math.cos(frame + randomValues[i + 2]) * 0.001;
    }
    plane.geometry.attributes.position.needsUpdate = true;
  };
  return plane;
}

export { createTerrain };
