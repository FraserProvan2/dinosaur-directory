import React, { useState } from "react";
import MainMenu from "./components/MainMenu";
import Quiz from "./components/Quiz";
import dinosaurs from "./data/dinosaurs";
import { generateQuestions } from "./service/QuizLogic";

function App() {
  const [quizMode, setQuizMode] = useState(null);
  const [questions, setQuestions] = useState([]);
  
  const startQuiz = (mode) => {
    setQuizMode(mode);
    setQuestions(generateQuestions(dinosaurs, mode)); // "normal" or "hard"
  };

  return (
    <div className="App">
      {quizMode ? (
        <Quiz questions={questions} onQuit={() => setQuizMode(null)} />
      ) : (
        <MainMenu startQuiz={startQuiz} />
      )}
    </div>
  );
}

export default App;
