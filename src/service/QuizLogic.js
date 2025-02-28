export function generateQuestions(dinoList, mode) {
  // Shuffle dinosaurs to ensure random order per quiz
  const shuffledDinos = [...dinoList].sort(() => Math.random() - 0.5);

  return shuffledDinos.map((dino) => {
    const isHard = mode === "hard";

    // Correct answer logic
    const correctAnswer = isHard
      ? `${dino.yearsMya.start}-${dino.yearsMya.end} MYA`
      : dino.fullPeriod;

    // Periods ordered chronologically
    const allPeriods = [
      "Late Triassic",
      "Early Jurassic",
      "Mid Jurassic",
      "Late Jurassic",
      "Early Cretaceous",
      "Late Cretaceous",
    ];

    let options;
    if (isHard) {
      // Generate 3 unique incorrect MYA ranges
      const incorrectMYA = generateUniqueMYA(dino.yearsMya.start, dino.yearsMya.end, 3);
      options = [correctAnswer, ...incorrectMYA];
      // Sort MYA values from newest to oldest
      options.sort((a, b) => parseInt(b.split("-")[0]) - parseInt(a.split("-")[0]));
    } else {
      // Find index of correct period
      const correctIndex = allPeriods.indexOf(dino.fullPeriod);
      let possibleIncorrect = [];
      if (correctIndex > 0) possibleIncorrect.push(allPeriods[correctIndex - 1]);
      if (correctIndex < allPeriods.length - 1) possibleIncorrect.push(allPeriods[correctIndex + 1]);
      if (correctIndex > 1) possibleIncorrect.push(allPeriods[correctIndex - 2]);
      if (correctIndex < allPeriods.length - 2) possibleIncorrect.push(allPeriods[correctIndex + 2]);
      
      // Ensure we have exactly 3 incorrect options
      while (possibleIncorrect.length < 3) {
        const fallbackOptions = allPeriods.filter(p => p !== dino.fullPeriod && !possibleIncorrect.includes(p));
        possibleIncorrect.push(fallbackOptions[Math.floor(Math.random() * fallbackOptions.length)]);
      }
      
      const incorrectAnswers = getRandomItems(possibleIncorrect, 3);
      options = [correctAnswer, ...incorrectAnswers];
      // Sort periods chronologically
      options.sort((a, b) => allPeriods.indexOf(a) - allPeriods.indexOf(b));
    }

    return {
      dinosaur: dino,
      correct: correctAnswer,
      options: options,
    };
  });
}

// Helper function to get random items from an array
function getRandomItems(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

// Generate unique MYA periods for hard mode
function generateUniqueMYA(correctStart, correctEnd, count) {
  const uniqueMYA = new Set();
  uniqueMYA.add(`${correctStart}-${correctEnd} MYA`);
  
  while (uniqueMYA.size < count + 1) {
    const start = Math.floor(Math.random() * 100) + 50;
    const end = start - Math.floor(Math.random() * 20) - 1;
    if (start !== correctStart && end !== correctEnd) {
      uniqueMYA.add(`${start}-${end} MYA`);
    }
  }
  return [...uniqueMYA].slice(1); // Remove correct answer from the set
}