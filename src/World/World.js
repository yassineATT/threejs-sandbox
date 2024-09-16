import { createCamera } from "./components/camera";
import { createScene } from "./components/scene";
import { createRenderer } from "./systems/renderer";
import { createLights } from "./components/lights";
import { createTerrain } from "./components/objects/terrain";
import { Resizer } from "./systems/Resizer";
import { Loop } from "./systems/Loop";

let camera;
let scene;
let renderer;
let loop;
let color = "blue";

class World {
  constructor(container) {
    camera = createCamera();
    scene = createScene("green");
    renderer = createRenderer();

    loop = new Loop(camera, scene, renderer);
    container.append(renderer.domElement);

    const { light, lightHelper } = createLights("white");
    const randomVals = [];

    for (let i = 0; i < 12675; i++) {
      randomVals.push(Math.random() - 0.5);
    }

    let terrain = createTerrain({ color: color, randomVertexArr: randomVals });

    loop.updatables.push(light);
    loop.updatables.push(terrain);

    scene.add(light, terrain);

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
