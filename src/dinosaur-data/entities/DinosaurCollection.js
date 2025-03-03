import Dinosaur from "./Dinosaur.js";

class DinosaurCollection {
  constructor() {
    this.dinosaurs = [];
  }

  async loadData() {
    try {
      const response = await fetch("./dinosaur-data/dinosaurs.json");
      const data = await response.json();
      this.dinosaurs = data.map(dino => new Dinosaur(dino));
    } catch (error) {
      console.error("Error loading dinosaur data:", error);
    }
  }

  getSortedByName() {
    return [...this.dinosaurs].sort((a, b) => a.name.localeCompare(b.name));
  }

  getByPeriod(period) {
    return this.dinosaurs.filter(dino => dino.period.toLowerCase() === period.toLowerCase());
  }

  getByDiet(diet) {
    return this.dinosaurs.filter(dino => dino.diet.toLowerCase() === diet.toLowerCase());
  }

  getRandomDinosaur() {
    const randomIndex = Math.floor(Math.random() * this.dinosaurs.length);
    return this.dinosaurs[randomIndex];
  }

  getByLocation(location) {
    return this.dinosaurs.filter(dino => dino.foundIn.includes(location));
  }

  getUniquePeriods() {
    return [...new Set(this.dinosaurs.map(dino => dino.fullPeriod))];
  }

  getUniqueDiets() {
    return [...new Set(this.dinosaurs.map(dino => dino.diet))];
  }

  getFormattedCollection() {
    return this.dinosaurs.map(dino => dino.getDetails());
  }
}

export default DinosaurCollection;
