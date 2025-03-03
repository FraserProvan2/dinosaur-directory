import React, { useState, useEffect } from "react";
import MainMenu from "./components/MainMenu";
import Quiz from "./components/Quiz";
import DinosaurCollection from "./entities/DinosaurCollection";
import { generateQuestions } from "./service/QuizLogic";

function App() {
  const [quizMode, setQuizMode] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [dinosaurCollection, setDinosaurCollection] = useState(null);
  const [isDataLoaded, setIsDataLoaded] = useState(false); // ✅ Track when data is loaded

  useEffect(() => {
    const loadDinosaurs = async () => {
      const collection = new DinosaurCollection();
      
      setDinosaurCollection(collection);
      setIsDataLoaded(true); // ✅ Data is now ready
    };

    loadDinosaurs();
  }, []);

  const startQuiz = (mode) => {
    if (!isDataLoaded || !dinosaurCollection || dinosaurCollection.dinosaurs.length === 0) {
      console.error("Dinosaur data is not loaded yet!");
      return;
    }

    setQuizMode(mode);
    setQuestions(generateQuestions(dinosaurCollection.dinosaurs, mode));
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