import dinosaurs from "../data/dinosaurs.json";

class DinosaurCollection {
  constructor() {
    this.dinosaurs = dinosaurs;
  }

  getSortedByName() {
    return [...this.dinosaurs].sort((a, b) => a.name.localeCompare(b.name));
  }

  getByPeriod(period) {
    return this.dinosaurs.filter(
      (dino) => dino.period.toLowerCase() === period.toLowerCase()
    );
  }

  getByDiet(diet) {
    return this.dinosaurs.filter(
      (dino) => dino.diet.toLowerCase() === diet.toLowerCase()
    );
  }

  getRandomDinosaur() {
    const randomIndex = Math.floor(Math.random() * this.dinosaurs.length);
    return this.dinosaurs[randomIndex];
  }
}

export default DinosaurCollection;
