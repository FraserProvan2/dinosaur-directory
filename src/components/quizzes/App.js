import React, { useState } from "react";
import PickPeriodQuiz from "./PickPeriodQuiz";
import GuessCorrectImage from "./GuessCorrectImage";

const App = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const renderQuizMenu = () => (
    <div className="quiz-menu">
      <div className="row justify-content-center mb-4">
        <div className="col-md-8">
          <div className="quiz-card card p-3 text-center">
            <h4>Pick Period</h4>
            <p className="mb-1">
              Test your knowledge of dinosaur eras by choosing the correct time period for each dinosaur.
            </p>
            <div className="d-flex justify-content-center">
              <button className="btn btn-primary mx-2 quiz-option" onClick={() => setSelectedQuiz({ type: "pickPeriod", difficulty: "easy" })}>
                Easy
              </button>
              <button className="btn btn-primary mx-2 quiz-option" onClick={() => setSelectedQuiz({ type: "pickPeriod", difficulty: "medium" })}>
                Medium
              </button>
              <button className="btn btn-primary mx-2 quiz-option" onClick={() => setSelectedQuiz({ type: "pickPeriod", difficulty: "hard" })}>
                Hard
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="quiz-card card p-3 text-center">
            <h4>Guess Correct Image</h4>
            <p className="mb-1">
              Identify the dinosaur by its image. Choose the correct image among several options.
            </p>
            <div className="d-flex justify-content-center">
              <button className="btn btn-primary mx-2 quiz-option" onClick={() => setSelectedQuiz({ type: "guessImage", difficulty: "easy" })}>
                Easy
              </button>
              <button className="btn btn-primary mx-2 quiz-option" onClick={() => setSelectedQuiz({ type: "guessImage", difficulty: "medium" })}>
                Medium
              </button>
              <button className="btn btn-primary mx-2 quiz-option" onClick={() => setSelectedQuiz({ type: "guessImage", difficulty: "hard" })}>
                Hard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div className="quiz-app">
      {selectedQuiz === null && renderQuizMenu()}
      {selectedQuiz?.type === "pickPeriod" && <PickPeriodQuiz difficulty={selectedQuiz.difficulty} onBack={() => setSelectedQuiz(null)} />}
      {selectedQuiz?.type === "guessImage" && <GuessCorrectImage difficulty={selectedQuiz.difficulty} onBack={() => setSelectedQuiz(null)} />}
    </div>
  );
};

export default App;
