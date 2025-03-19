import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import PickPeriodQuiz from "./PickPeriodQuiz";
import GuessCorrectImage from "./GuessCorrectImage";
import TriviaQuiz from "./TriviaQuiz";

const App = () => {
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const renderQuizMenu = () => (
    <div className="quiz-menu">
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
                  setSelectedQuiz({ type: "trivia", difficulty: "easy" })
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
                  setSelectedQuiz({ type: "trivia", difficulty: "hard" })
                }
              >
                Hard
              </button>
            </div>
          </div>
        </div>
      </div>
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
    if (!selectedQuiz) return "Dinosaur Quizzes";
    if (selectedQuiz.type === "pickPeriod") return "Pick Period Quiz";
    if (selectedQuiz.type === "guessImage") return "Guess Correct Image Quiz";
    if (selectedQuiz.type === "trivia") return "Trivia Quiz";
    return "Dinosaur Quizzes";
  };

  return (
    <div className="quiz-app">
      <Helmet>
        <title>Quizzes - dinosaur.directory</title>
        <meta
          name="description"
          content="Test your dinosaur knowledge with our interactive quizzes on dinosaur.directory. Choose from Pick Period, Trivia, or Guess Correct Image quizzes and challenge yourself!"
        />
        <link rel="canonical" href="https://dinosaur.directory/quizzes" />

        <meta property="og:title" content="Quizzes - dinosaur.directory" />
        <meta
          property="og:description"
          content="Test your dinosaur knowledge with our interactive quizzes on dinosaur.directory. Choose from Pick Period, Trivia, or Guess Correct Image quizzes and challenge yourself!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dinosaur.directory/quizzes" />
        <meta
          property="og:image"
          content="https://dinosaur.directory/images/quizzes-og.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dinosaur_directory" />
        <meta name="twitter:title" content="Quizzes - dinosaur.directory" />
        <meta
          name="twitter:description"
          content="Test your dinosaur knowledge with our interactive quizzes on dinosaur.directory. Choose from Pick Period, Trivia, or Guess Correct Image quizzes and challenge yourself!"
        />
        <meta
          name="twitter:image"
          content="https://dinosaur.directory/images/quizzes-og.png"
        />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Dinosaur Quizzes",
              "description": "Test your dinosaur knowledge with our interactive quizzes on dinosaur.directory. Choose from Pick Period, Trivia, or Guess Correct Image quizzes and challenge yourself!",
              "url": "https://dinosaur.directory/quizzes"
            }
          `}
        </script>
      </Helmet>
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
