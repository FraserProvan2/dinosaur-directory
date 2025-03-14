import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import DinosaurCollection from "../../entities/DinosaurCollection";
import fullPeriods from "../../data/full-periods.json";
import { getRandomElement } from "./utils";

const MAX_QUESTIONS = 20;
const dinosaurs = DinosaurCollection.getAllDinosaurs();

const PickPeriodQuiz = ({ difficulty, onBack }) => {
  const [currentDino, setCurrentDino] = useState(null);
  const [choices, setChoices] = useState([]);
  const [selected, setSelected] = useState(null);
  const [correct, setCorrect] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [answeredDinos, setAnsweredDinos] = useState(new Set());
  const [quizComplete, setQuizComplete] = useState(false);

  useEffect(() => {
    generateQuestion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const generateQuestion = () => {
    if (totalQuestions >= MAX_QUESTIONS) {
      setQuizComplete(true);
      return;
    }
    let filteredDinos = dinosaurs.filter(
      (d) => !answeredDinos.has(d.getName())
    );
    if (difficulty === "easy") {
      filteredDinos = filteredDinos.filter((d) => d.getDifficulty() === 0);
    }
    if (filteredDinos.length === 0) {
      setQuizComplete(true);
      return;
    }
    const randomDino = getRandomElement(filteredDinos);
    const options = getOptions(randomDino);
    setCurrentDino(randomDino);
    setChoices(options);
    setSelected(null);
    setCorrect(null);
  };

  const getOptions = (dino) => {
    if (!dino) return [];
    const fullPeriodsList = Object.keys(fullPeriods);
    const groupedPeriods = ["Triassic", "Jurassic", "Cretaceous"];
    if (difficulty !== "hard") {
      return groupedPeriods;
    }
    const correctAnswer = dino.getFullPeriod();
    const correctIndex = fullPeriodsList.indexOf(correctAnswer);
    if (correctIndex === -1) return fullPeriodsList.slice(0, 4);
    let choicesSet = new Set([correctAnswer]);
    if (correctIndex > 0) choicesSet.add(fullPeriodsList[correctIndex - 1]);
    if (correctIndex < fullPeriodsList.length - 1)
      choicesSet.add(fullPeriodsList[correctIndex + 1]);
    for (let i = 2; choicesSet.size < 4; i++) {
      if (correctIndex - i >= 0)
        choicesSet.add(fullPeriodsList[correctIndex - i]);
      if (correctIndex + i < fullPeriodsList.length)
        choicesSet.add(fullPeriodsList[correctIndex + i]);
      if (i > fullPeriodsList.length) break;
    }
    while (choicesSet.size > 4) {
      let removable = [...choicesSet].filter((p) => p !== correctAnswer);
      choicesSet.delete(
        removable[Math.floor(Math.random() * removable.length)]
      );
    }
    return Array.from(choicesSet).sort(
      (a, b) => fullPeriodsList.indexOf(a) - fullPeriodsList.indexOf(b)
    );
  };

  const handleAnswer = (choice) => {
    if (selected) return;
    setSelected(choice);
    const isCorrect =
      difficulty === "hard"
        ? choice === currentDino.getFullPeriod()
        : choice === currentDino.getPeriod();
    setCorrect(
      isCorrect
        ? choice
        : difficulty === "hard"
        ? currentDino.getFullPeriod()
        : currentDino.getPeriod()
    );
    const newTotal = totalQuestions + 1;
    setTotalQuestions(newTotal);
    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
      setAnsweredDinos(new Set(answeredDinos).add(currentDino.getName()));
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
        {difficulty === "easy" ? (
          <p>
            You got {correctCount} correct ({scorePercentage}%)
          </p>
        ) : (
          <p>
            You got {correctCount} / {totalQuestions} correct ({scorePercentage}
            % )
          </p>
        )}
        <button className="btn btn-secondary" onClick={onBack}>
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
        {difficulty === "easy" ? (
          <p>Question {currentQuestionDisplay}</p>
        ) : (
          <p>
            Question {currentQuestionDisplay} / {MAX_QUESTIONS}
          </p>
        )}
      </div>
      {currentDino ? (
        <>
          <div className="quiz-header">
            <h2>{currentDino.getName()}</h2>
            <p className="pronunciation text-muted text-sm">
              ({currentDino.getPronunciation()})
            </p>
          </div>
          <motion.img
            src={`/images/dinosaurs/${currentDino.getImage()}`}
            alt={currentDino.getName()}
            className="dino-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <p className="mt-3">
            Which time period did the {currentDino.getName()} live in?
          </p>
          <div className="options mb-3">
            {choices.map((choice, index) => (
              <motion.button
                key={index}
                className={`text-option-btn ${
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
          {selected && totalQuestions < MAX_QUESTIONS && (
            <button
              className="btn btn-next btn-primary"
              onClick={generateQuestion}
            >
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
        </>
      ) : (
        <p>Loading question...</p>
      )}
    </div>
  );
};

export default PickPeriodQuiz;
