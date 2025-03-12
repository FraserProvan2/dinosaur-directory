import dinosaurs from "../data/dinosaurs.json";

class DinosaurCollection {
  constructor() {
    this.dinosaurs = dinosaurs;
  }

  getAllDinosaurs() {
    return [...this.dinosaurs];
  }

  getDinosaurOfTheWeek() {
    const oneWeekInMs = 7 * 24 * 60 * 60 * 1000;
    const weekNumber = Math.floor(Date.now() / oneWeekInMs);
    const index = weekNumber % this.dinosaurs.length;
    const dinoData = this.dinosaurs[index];
    return dinoData;
  }
}

export default new DinosaurCollection();
