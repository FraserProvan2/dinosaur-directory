import dinosaurs from "../data/dinosaurs.json";
import BaseCountriesPositions from "../data/base-countries-positions.json";

class DinosaurCollection {
  constructor() {
    this.dinosaurs = dinosaurs;
  }

  getAllDinosaurs() {
    return [...this.dinosaurs];
  }

  getAllBaseCountriesCords() {
    const countryMap = {};

    this.dinosaurs.forEach((dino) => {
      const period = dino.fullPeriod;

      if (!countryMap[period]) {
        countryMap[period] = {};
      }

      dino.foundIn.forEach((country) => {
        if (!BaseCountriesPositions[country]) {
          console.error(`Missing base coordinates for: ${country}`);
          return;
        }

        countryMap[dino.fullPeriod][country] = BaseCountriesPositions[country];
      });
    });

    return countryMap;
  }
}

export default new DinosaurCollection();
