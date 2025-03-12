import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { shuffleArray, getRandomElement } from "./utils";
import dinosaurs from "../../data/dinosaurs.json";

const MAX_QUESTIONS = 20;

const GuessCorrectImage = ({ difficulty, onBack }) => {
  const [currentDino, setCurrentDino] = useState(null);
  const [choices, setChoices] = useState([]);
  const [selected, setSelected] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const numberOfOptions =
    difficulty === "easy"
      ? 3
      : difficulty === "medium"
      ? 4
      : difficulty === "hard"
      ? 5
      : 0;
  const generateQuestion = () => {
    if (totalQuestions >= MAX_QUESTIONS) {
      setQuizComplete(true);
      return;
    }
    const target = getRandomElement(dinosaurs);
    let otherDinos = dinosaurs.filter((d) => d.name !== target.name);
    otherDinos = shuffleArray(otherDinos).slice(0, numberOfOptions - 1);
    const options = shuffleArray([target, ...otherDinos]);
    setCurrentDino(target);
    setChoices(options);
    setSelected(null);
  };
  useEffect(() => {
    generateQuestion();
  }, []);
  const handleAnswer = (dino) => {
    if (selected) return;
    setSelected(dino);
    const newTotal = totalQuestions + 1;
    setTotalQuestions(newTotal);
    if (dino.name === currentDino.name) {
      setCorrectCount((prev) => prev + 1);
    }
  };
  const scorePercentage =
    totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
  const currentQuestionDisplay =
    totalQuestions < MAX_QUESTIONS ? totalQuestions + 1 : MAX_QUESTIONS;
  if (quizComplete) {
    return (
      <div className="quiz-container">
        <h2 className="mb-3">Quiz Complete!</h2>
        <p>
          You got {correctCount} / {totalQuestions} correct ({scorePercentage}%)
        </p>
        <button className="btn btn btn-secondary px-5" onClick={onBack}>
          Back to Quiz Menu
        </button>
      </div>
    );
  }
  return (
    <div className="quiz-container">
      <div className="score-tracker">
        <p>
          {correctCount} / {totalQuestions} Correct ({scorePercentage}%)
        </p>
        <p>
          Question {currentQuestionDisplay} / {MAX_QUESTIONS}
        </p>
      </div>
      <h2>Guess the Correct Image</h2>
      {currentDino && (
        <p className="quiz-question">
          Select the image of <strong>{currentDino.name}</strong>
        </p>
      )}
      <div className="image-options-grid mb-3">
        {choices.map((dino, index) => (
          <motion.button
            key={index}
            className={`image-option-btn ${
              selected
                ? dino.name === currentDino.name
                  ? "correct"
                  : dino === selected
                  ? "incorrect"
                  : ""
                : ""
            }`}
            onClick={() => handleAnswer(dino)}
            disabled={!!selected}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.02 }}
          >
            <img
              src={`/images/dinosaurs/${dino.name.toLowerCase()}.png`}
              alt={dino.name}
              className="dino-image-option"
            />
          </motion.button>
        ))}
      </div>
      {selected && totalQuestions < MAX_QUESTIONS && (
        <button className="btn btn-next btn-primary" onClick={generateQuestion}>
          Next Question
        </button>
      )}
      {selected && totalQuestions === MAX_QUESTIONS && (
        <button
          className="btn btn-primary btn-finish-quiz"
          onClick={() => setQuizComplete(true)}
        >
          Finish Quiz
        </button>
      )}
      <button className="btn btn-secondary" onClick={onBack}>
        Back to Quiz Menu
      </button>
    </div>
  );
};

export default GuessCorrectImage;
