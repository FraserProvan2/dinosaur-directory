import React, { useState } from "react";

function Quiz({ questions, onQuit }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleAnswer = (answer) => {
    if (selectedAnswer !== null) return; // Prevent multiple clicks

    setSelectedAnswer(answer);
    setShowFeedback(true);
    setAttempts((prev) => prev + 1); // Update attempts immediately

    if (answer === currentQuestion.correct) {
      setScore((prev) => prev + 1); // Update score immediately
    }

    setTimeout(() => {
      setShowFeedback(false);
      setSelectedAnswer(null);
      setCurrentIndex((prev) => prev + 1);
    }, 2000);
  };

  if (currentIndex >= questions.length) {
    return (
      <div className="quiz">
        <h2>Quiz Complete!</h2>
        <p>Score: {score} / {questions.length} ({((score / questions.length) * 100).toFixed(1)}%)</p>
        <button onClick={onQuit}>Back to Menu</button>
      </div>
    );
  }

  return (
    <div className="quiz">
      <h2>{currentQuestion.dinosaur.name}</h2>
      <img 
        className="dino-image"
        src={require(`../images/${currentQuestion.dinosaur.image}`)}
        alt={currentQuestion.dinosaur.name}
      />
      <div className="options">
        {currentQuestion.options.map((option) => (
          <button 
            key={option} 
            className={`option ${showFeedback ? (option === currentQuestion.correct ? "correct" : (option === selectedAnswer ? "incorrect" : "")) : ""}`}
            onClick={() => handleAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
      {showFeedback && (
        <div className="feedback">
          {selectedAnswer === currentQuestion.correct ? "Correct! 🎉" : "Incorrect! ❌"}
        </div>
      )}
      <div className="score">Score: {score} / {attempts} ({attempts > 0 ? ((score / attempts) * 100).toFixed(1) : 0}%)</div>
    </div>
  );
}

export default Quiz;
