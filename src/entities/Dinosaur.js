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
    this.difficulty = data.difficulty;
  }
  getName() {
    return this.name;
  }
  getNameLower() {
    return this.name.toLowerCase();
  }
  getImage() {
    return this.image || `${this.name}.png`;
  }
  getPeriod() {
    return this.period;
  }
  getFullPeriod() {
    return this.fullPeriod;
  }
  getYearsMya() {
    return this.yearsMya;
  }
  getPronunciation() {
    return this.pronunciation;
  }
  getMeaning() {
    return this.meaning;
  }
  getDiet() {
    return this.diet;
  }
  getLengthMeters() {
    return this.lengthMeters;
  }
  getFoundIn() {
    return this.foundIn;
  }
  getFoundInString() {
    return Array.isArray(this.foundIn) ? this.foundIn.join(", ") : "";
  }
  getDifficulty() {
    return this.difficulty;
  }
}

export default Dinosaur;
