import React from "react";
import QuizGame from "../components/quizzes/App";

function Quizzes() {
  return (
    <div className="container dynamic-margin-top">
      <h1 className="text-center">Dinosaur Quiz</h1>
      <QuizGame />
    </div>
  );
}

export default Quizzes;
