import React, { useState, useEffect } from "react";
import dinosaurs from "../data/dinosaurs.json";
import { motion } from "framer-motion";

function QuizGame() {
  const [currentDino, setCurrentDino] = useState(null);
  const [choices, setChoices] = useState([]);
  const [selected, setSelected] = useState(null);
  const [correct, setCorrect] = useState(null);
  const [showNext, setShowNext] = useState(false);
  const [difficulty, setDifficulty] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [streak, setStreak] = useState(0);
  const [answeredDinos, setAnsweredDinos] = useState(new Set());
  const [quizComplete, setQuizComplete] = useState(false);

  useEffect(() => {
    if (difficulty) generateQuestion();
  }, [difficulty]);

  const startGame = (level) => {
    setDifficulty(level);
    setCurrentDino(null);
    setCorrectCount(0);
    setTotalQuestions(0);
    setStreak(0);
    setAnsweredDinos(new Set());
    setQuizComplete(false);
  };

  const generateQuestion = () => {
    let filteredDinos = dinosaurs.filter((d) => !answeredDinos.has(d.name));
    if (difficulty === "easy") {
      filteredDinos = filteredDinos.filter((d) => d.difficulty === 0);
    }
    if (filteredDinos.length === 0) {
      setQuizComplete(true);
      return;
    }
    const randomDino =
      filteredDinos[Math.floor(Math.random() * filteredDinos.length)];
    let options = getOptions(randomDino);
    setCurrentDino(randomDino);
    setChoices(options);
    setSelected(null);
    setCorrect(null);
    setShowNext(false);
  };

  const getOptions = (dino) => {
    if (!dino) return [];
    let periods = ["Triassic", "Jurassic", "Cretaceous"];
    if (difficulty === "hard") {
      periods = [
        "Late Triassic",
        "Early Jurassic",
        "Mid Jurassic",
        "Late Jurassic",
        "Early Cretaceous",
        "Late Cretaceous",
      ];
    }
    const correctAnswer = difficulty === "hard" ? dino.fullPeriod : dino.period;
    const incorrectChoices = periods
      .filter((p) => p !== correctAnswer)
      .slice(0, difficulty === "hard" ? 3 : 2);
    return [correctAnswer, ...incorrectChoices].sort(
      (a, b) => periods.indexOf(a) - periods.indexOf(b)
    );
  };

  const handleAnswer = (choice) => {
    setSelected(choice);
    const isCorrect =
      choice ===
      (difficulty === "hard" ? currentDino.fullPeriod : currentDino.period);
    setCorrect(
      isCorrect
        ? choice
        : difficulty === "hard"
        ? currentDino.fullPeriod
        : currentDino.period
    );
    setTotalQuestions(totalQuestions + 1);
    if (isCorrect) {
      setCorrectCount(correctCount + 1);
      setStreak(streak + 1);
      setAnsweredDinos(new Set(answeredDinos).add(currentDino.name));
    } else {
      setStreak(0);
    }
    setShowNext(true);
  };

  const getStreakEmoji = () => {
    if (streak >= 3) return "🔥";
    if (streak === 2) return "🚀";
    if (streak === 1) return "🎉";
    return "";
  };

  if (quizComplete) {
    return (
      <div className="quiz-container">
        <h2>Quiz Complete!</h2>
        <p>
          You got {correctCount} / {totalQuestions} correct (
          {totalQuestions > 0
            ? Math.round((correctCount / totalQuestions) * 100)
            : 0}
          %).
        </p>
        <button
          className="btn btn-link back-to-menu"
          onClick={() => startGame(null)}
        >
          Back to Quiz Menu
        </button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      {!difficulty ? (
        <div className="difficulty-select">
          <h2>Select Difficulty</h2>
          <button
            className="btn btn-start-game btn-primary mx-1"
            onClick={() => startGame("easy")}
          >
            Easy
          </button>
          <button
            className="btn btn-start-game btn-light mx-1"
            onClick={() => startGame("medium")}
          >
            Medium
          </button>
          <button
            className="btn btn-start-game btn-light mx-1"
            onClick={() => startGame("hard")}
          >
            Hard
          </button>
        </div>
      ) : currentDino ? (
        <>
          <p className="score-tracker">
            {correctCount} / {totalQuestions} Correct (
            {totalQuestions > 0
              ? Math.round((correctCount / totalQuestions) * 100)
              : 0}
            %)
          </p>
          <div className="quiz-header">
            <h2>{currentDino.name}</h2>
            <p className="pronunciation text-muted text-sm">({currentDino.pronunciation})</p>
          </div>
          <motion.img
            src={`/images/dinosaurs/${currentDino.name.toLowerCase()}.png`}
            alt={currentDino.name}
            className="dino-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <p class="mt-3">
            Which time period did the {currentDino.name} live in?
          </p>
          <div className="options">
            {choices.map((choice, index) => (
              <motion.button
                key={index}
                className={`option-btn ${
                  selected
                    ? choice === correct
                      ? "correct"
                      : choice === selected
                      ? "incorrect"
                      : ""
                    : ""
                }`}
                onClick={() => handleAnswer(choice)}
                disabled={!!selected}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.02 }}
              >
                {choice}
              </motion.button>
            ))}
          </div>
          {selected && (
            <p className="feedback">
              {selected === correct
                ? `${getStreakEmoji()} Correct! The ${
                    currentDino.name
                  } lived between ${currentDino.yearsMya.start} - ${
                    currentDino.yearsMya.end
                  } million years ago.`
                : `❌ Incorrect! The correct answer is ${correct}.`}
            </p>
          )}
          {showNext && (
            <button className="next-btn" onClick={generateQuestion}>
              Next Question
            </button>
          )}
          <button
            className="btn btn-link back-to-menu"
            onClick={() => setDifficulty(null)}
          >
            Back to Quiz Menu
          </button>
        </>
      ) : (
        <p>Loading question...</p>
      )}
    </div>
  );
}

export default QuizGame;
