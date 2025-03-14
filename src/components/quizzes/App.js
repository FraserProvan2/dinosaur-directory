import React, { useState } from "react";
import PickPeriodQuiz from "./PickPeriodQuiz";
import GuessCorrectImage from "./GuessCorrectImage";
import TriviaQuiz from "./TriviaQuiz";

const App = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const renderQuizMenu = () => (
    <div className="quiz-menu">
      {/* Pick Period Quiz Section */}
      <div className="row justify-content-center my-3">
        <div className="col-md-8">
          <div className="quiz-card card p-4 text-center">
            <h4>Pick Period</h4>
            <p className="mb-1">
              Test your knowledge of dinosaur eras by choosing the correct time
              period for each dinosaur.
            </p>
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-primary mx-2 quiz-option"
                onClick={() =>
                  setSelectedQuiz({ type: "pickPeriod", difficulty: "easy" })
                }
              >
                Easy
              </button>
              <button
                className="btn btn-secondary mx-2 quiz-option"
                onClick={() =>
                  setSelectedQuiz({ type: "pickPeriod", difficulty: "medium" })
                }
              >
                Medium
              </button>
              <button
                className="btn btn-secondary mx-2 quiz-option"
                onClick={() =>
                  setSelectedQuiz({ type: "pickPeriod", difficulty: "hard" })
                }
              >
                Hard
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Trivia Quiz Section */}
      <div className="row justify-content-center my-3">
        <div className="col-md-8">
          <div className="quiz-card card p-4 text-center">
            <h4>Trivia</h4>
            <p className="mb-1">
              Answer written questions about dinosaurs. Choose the correct
              answer from the options.
            </p>
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-primary mx-2 quiz-option"
                onClick={() =>
                  setSelectedQuiz({ type: "trivia", difficulty: 0 })
                }
              >
                Easy
              </button>
              <button
                className="btn btn-secondary mx-2 quiz-option"
                onClick={() =>
                  setSelectedQuiz({ type: "trivia", difficulty: "medium" })
                }
              >
                Medium
              </button>
              <button
                className="btn btn-secondary mx-2 quiz-option"
                onClick={() =>
                  setSelectedQuiz({ type: "trivia", difficulty: 1 })
                }
              >
                Hard
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Guess Correct Image Quiz Section */}
      <div className="row justify-content-center my-3">
        <div className="col-md-8">
          <div className="quiz-card card p-4 text-center">
            <h4>Guess Correct Image</h4>
            <p className="mb-1">
              Identify the dinosaur by its image. Choose the correct image among
              several options.
            </p>
            <div className="d-flex justify-content-center">
              <button
                className="btn btn-primary mx-2 quiz-option"
                onClick={() =>
                  setSelectedQuiz({ type: "guessImage", difficulty: "easy" })
                }
              >
                Easy
              </button>
              <button
                className="btn btn-secondary mx-2 quiz-option"
                onClick={() =>
                  setSelectedQuiz({ type: "guessImage", difficulty: "medium" })
                }
              >
                Medium
              </button>
              <button
                className="btn btn-secondary mx-2 quiz-option"
                onClick={() =>
                  setSelectedQuiz({ type: "guessImage", difficulty: "hard" })
                }
              >
                Hard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const getHeaderTitle = () => {
    if (!selectedQuiz) {
      return "Dinosaur Quizzes";
    }
    if (selectedQuiz.type === "pickPeriod") {
      return "Pick Period Quiz";
    }
    if (selectedQuiz.type === "guessImage") {
      return "Guess Correct Image Quiz";
    }
    if (selectedQuiz.type === "trivia") {
      return "Trivia Quiz";
    }
    return "Dinosaur Quizzes";
  };

  return (
    <div className="quiz-app">
      <h1 className="text-center">{getHeaderTitle()}</h1>
      {selectedQuiz === null && renderQuizMenu()}
      {selectedQuiz?.type === "pickPeriod" && (
        <PickPeriodQuiz
          difficulty={selectedQuiz.difficulty}
          onBack={() => setSelectedQuiz(null)}
        />
      )}
      {selectedQuiz?.type === "guessImage" && (
        <GuessCorrectImage
          difficulty={selectedQuiz.difficulty}
          onBack={() => setSelectedQuiz(null)}
        />
      )}
      {selectedQuiz?.type === "trivia" && (
        <TriviaQuiz
          difficulty={selectedQuiz.difficulty}
          onBack={() => setSelectedQuiz(null)}
        />
      )}
    </div>
  );
};

export default App;
