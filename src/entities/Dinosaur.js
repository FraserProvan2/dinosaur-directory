class Dinosaur {
  constructor(data) {
    this.name = data.name;
    this.image = data.image;
    this.period = data.period;
    this.fullPeriod = data.fullPeriod;
    this.yearsMya = data.yearsMya;
    this.pronunciation = data.pronunciation;
    this.meaning = data.meaning;
    this.diet = data.diet;
    this.lengthMeters = data.lengthMeters;
    this.foundIn = data.foundIn;
  }

  getName() {
    return this.name;
  }

  getPronunciation() {
    return this.pronunciation;
  }

  getLivedPeriod() {
    return `${this.fullPeriod} (${this.yearsMya.start}-${this.yearsMya.end} MYA)`;
  }

  getDietType() {
    return `${this.name} was a ${this.diet}.`;
  }

  getFoundLocations() {
    return this.foundIn.length ? this.foundIn.join(", ") : "Unknown";
  }

  getDetails() {
    return {
      name: this.getName(),
      pronunciation: this.getPronunciation(),
      period: this.getLivedPeriod(),
      diet: this.getDietType(),
      foundIn: this.getFoundLocations(),
      image: this.image,
      lengthMeters: this.lengthMeters,
    };
  }
}

export default Dinosaur;
