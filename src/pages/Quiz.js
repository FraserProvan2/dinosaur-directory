import React from "react";
import QuizGame from "../components/quiz/QuizGame";

function Quiz() {
  return (
    <div className="container dynamic-margin-top">
      <h1 className="text-center text-primary">Dinosaur Quiz</h1>
      <QuizGame />
    </div>
  );
}

export default Quiz;
