import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import triviaQuestions from "../../data/trivia-questions.json";

const MAX_QUESTIONS = 20;

const TriviaQuiz = ({ difficulty, onBack }) => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [displayOptions, setDisplayOptions] = useState([]);
  const [selected, setSelected] = useState(null);
  const [correct, setCorrect] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const shuffleArray = (array) => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  const computeDisplayOptions = (answers, diff, correctAnswer) => {
    if (diff === "medium" && answers.length > 3) {
      if (!answers.slice(0, 3).includes(correctAnswer)) {
        return shuffleArray([...answers.slice(0, 2), correctAnswer]);
      } else {
        return answers.slice(0, 3);
      }
    }
    return answers;
  };

  useEffect(() => {
    const questionDifficulty = difficulty === "medium" ? 1 : difficulty;
    let filtered = triviaQuestions.filter(
      (q) => q.difficulty === questionDifficulty
    );
    let shuffledQuestions = shuffleArray(filtered);
    if (shuffledQuestions.length > MAX_QUESTIONS) {
      shuffledQuestions = shuffledQuestions.slice(0, MAX_QUESTIONS);
    }
    setQuestions(shuffledQuestions);
    if (shuffledQuestions.length > 0) {
      const firstQuestion = shuffledQuestions[0];
      setCurrentQuestion(firstQuestion);
      const shuffledAns = shuffleArray(firstQuestion.answers);
      setShuffledAnswers(shuffledAns);
      setDisplayOptions(
        computeDisplayOptions(
          shuffledAns,
          difficulty,
          firstQuestion.correctAnswer
        )
      );
    } else {
      setQuizComplete(true);
    }
  }, [difficulty]);

  const handleAnswer = (choice) => {
    if (selected) return;
    setSelected(choice);
    const isCorrect = choice === currentQuestion.correctAnswer;
    setCorrect(currentQuestion.correctAnswer);
    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex >= questions.length) {
      setQuizComplete(true);
    } else {
      setCurrentIndex(nextIndex);
      const nextQ = questions[nextIndex];
      setCurrentQuestion(nextQ);
      const shuffledAns = shuffleArray(nextQ.answers);
      setShuffledAnswers(shuffledAns);
      setDisplayOptions(
        computeDisplayOptions(shuffledAns, difficulty, nextQ.correctAnswer)
      );
      setSelected(null);
      setCorrect(null);
    }
  };

  const scorePercentage =
    questions.length > 0
      ? Math.round((correctCount / questions.length) * 100)
      : 0;
  const currentQuestionDisplay = currentIndex + 1;

  if (quizComplete) {
    return (
      <div className="quiz-container">
        <h2 className="mb-3">Quiz Complete!</h2>
        <p>
          You got {correctCount} / {questions.length} correct ({scorePercentage}
          %)
        </p>
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
          {correctCount} / {questions.length} Correct ({scorePercentage}%)
        </p>
        <p>
          Question {currentQuestionDisplay} / {questions.length}
        </p>
      </div>
      {currentQuestion ? (
        <>
          <div className="quiz-header">
            <h2>{currentQuestion.question}</h2>
          </div>
          <div className="options mb-3">
            {displayOptions.map((choice, index) => (
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
          {selected && currentIndex < questions.length - 1 && (
            <button className="btn btn-next btn-primary" onClick={nextQuestion}>
              Next Question
            </button>
          )}
          {selected && currentIndex === questions.length - 1 && (
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

export default TriviaQuiz;
