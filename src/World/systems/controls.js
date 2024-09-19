import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { MathUtils } from "three";

function createControls(camera, canvas) {
  const controls = new OrbitControls(camera, canvas);

  controls.enable = true;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.2;

  controls.minPolarAngle = MathUtils.degToRad(45);
  controls.maxPolarAngle = MathUtils.degToRad(90);

  controls.enableDamping = true;
  controls.enableZoom = false;
  controls.enablePan = false;

  controls.tick = () => controls.update();

  return controls;
}

export { createControls };
