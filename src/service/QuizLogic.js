export function generateQuestions(dinoList, mode) {
  return dinoList.map((dino) => {
    const isHard = mode === "hard";

    // Correct answer logic
    const correctAnswer = isHard
      ? `${dino.yearsMya.start}-${dino.yearsMya.end} MYA`
      : dino.fullPeriod;

    // Generate incorrect answers
    const allPeriods = [
      "Late Triassic",
      "Early Jurassic",
      "Mid Jurassic",
      "Late Jurassic",
      "Early Cretaceous",
      "Late Cretaceous",
    ];

    const filteredPeriods = allPeriods.filter((p) => p !== dino.fullPeriod);
    const incorrectAnswers = getRandomItems(filteredPeriods, 3);

    // In hard mode, generate MYA values instead of periods
    const options = isHard
      ? [
          correctAnswer,
          ...generateRandomMYA(dino.yearsMya.start, dino.yearsMya.end),
        ]
      : [correctAnswer, ...incorrectAnswers];

    return {
      dinosaur: dino,
      correct: correctAnswer,
      options: shuffle(options),
    };
  });
}

// Helper function to get random items from an array
function getRandomItems(arr, num) {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
}

// Generate 3 random MYA periods for hard mode
function generateRandomMYA(correctStart, correctEnd) {
  const randomRanges = [];
  while (randomRanges.length < 3) {
    const start = Math.floor(Math.random() * 100) + 50; // Random start between 50 and 150 MYA
    const end = start - Math.floor(Math.random() * 20) - 1; // Random end within 20 MYA
    if (start !== correctStart && end !== correctEnd) {
      randomRanges.push(`${start}-${end} MYA`);
    }
  }
  return randomRanges;
}

// Shuffle function for randomizing options
function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}
