// Le resizer gère les événements de redimensionnement de la fenêtre
const setSize = (container, camera, renderer) => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio));
};
class Resizer {
  constructor(container, camera, renderer) {
    // Définir la taille initiale
    setSize(container, camera, renderer);
    window.addEventListener("resize", () => {
      // Mettre à jour la taille
      setSize(container, camera, renderer);
      // Rendre la scène à nouveau visible
      this.onResize();
    });
  }
  onResize() {}
}
export { Resizer };
