import dinosaurs from "../data/dinosaurs.json";

class DinosaurCollection {
  constructor() {
    this.dinosaurs = dinosaurs;
  }

  getAllDinosaurs() {
    return [...this.dinosaurs]; // Return all dinosaurs
  }

  getAllCountries() {
    const countryMap = {}; // Store unique countries with their periods

    this.dinosaurs.forEach((dino) => {
      dino.foundIn.forEach((country) => {
        if (!countryMap[country]) {
          countryMap[country] = new Set();
        }
        countryMap[country].add(dino.fullPeriod);
      });
    });

    // Convert Sets to arrays and return
    return Object.entries(countryMap).reduce((acc, [country, periods]) => {
      acc[country] = Array.from(periods);
      return acc;
    }, {});
  }
}

export default new DinosaurCollection();
