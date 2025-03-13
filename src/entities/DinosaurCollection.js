import dinosaurs from "../data/dinosaurs.json";
import Dinosaur from "./Dinosaur";

class DinosaurCollection {
  constructor() {
    this.dinosaurs = dinosaurs.map((dinoData) => new Dinosaur(dinoData));
  }
  getAllDinosaurs() {
    return [...this.dinosaurs];
  }
  getDinosaurOfTheWeek() {
    const now = new Date();
    const d = new Date(
      Date.UTC(now.getFullYear(), now.getMonth(), now.getDate())
    );
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7));
    const weekNo = Math.ceil(
      ((d - new Date(Date.UTC(d.getUTCFullYear(), 0, 1))) / 86400000 + 1) / 7
    );
    return this.dinosaurs[(weekNo - 1) % this.dinosaurs.length];
  }
}

export default new DinosaurCollection();
