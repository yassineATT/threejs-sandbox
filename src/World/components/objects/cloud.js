import { Group, MeshStandardMaterial, SphereGeometry, Mesh } from "three";

function createCloud() {
  const cloudGroup = new Group();

  const cloudMaterial = new MeshStandardMaterial({
    color: 0xffffff,
    flatShading: true,
  });

  const terrainSize = 200;
  const halfTerrainSize = terrainSize / 2;
  for (let i = 0; i < 10; i++) {
    const cloudGeometry = new SphereGeometry(2, 22, 22);

    const cloud = new Mesh(cloudGeometry, cloudMaterial);
    cloud.position.set(
      Math.random() * terrainSize - halfTerrainSize,
      20,
      Math.random() * terrainSize - halfTerrainSize
    );
    cloud.scale.set(3, 1, 5); 
    cloudGroup.add(cloud);
  }

  cloudGroup.tick = (delta) => {};

  return cloudGroup;
}

export { createCloud };
