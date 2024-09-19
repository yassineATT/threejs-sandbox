import { createCamera } from "./components/camera";
import { createScene } from "./components/scene";
import { createRenderer } from "./systems/renderer";
import { createLights } from "./components/lights";
import { Resizer } from "./systems/Resizer";
import { Loop } from "./systems/Loop";
import { createControls } from "./systems/controls";
import { DirectionalLight } from "three";
import { createTerrain } from "./components/objects/terrain";
import { createCloud } from "./components/objects/cloud";

let camera;
let scene;
let renderer;
let loop;
let color = "#0aa316";

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene("#10abee");
    renderer = createRenderer();

    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);

    const controls = createControls(camera, renderer.domElement);

    const { light, lightHelper } = createLights("white");
    const directionalLight2 = new DirectionalLight(0xffffff, 3);
    directionalLight2.position.set(-100, -100, -100);
    const randomVals = [];

    for (let i = 0; i < 12675; i++) {
      randomVals.push(Math.random());
    }

    let terrain = createTerrain({ color: color, randVertexArr: randomVals });
    let cloud = createCloud();

    loop.updatables.push(controls);
    loop.updatables.push(light);
    loop.updatables.push(terrain);
    loop.updatables.push(cloud);

    scene.add(light, terrain, cloud, directionalLight2);

    const resizer = new Resizer(container, camera, renderer);
    resizer.onResize = () => {
      this.render();
    };
  }
  render() {
    renderer.render(scene, camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };
