
import React from "react";
import "../styles/main-menu.scss";

function MainMenu({ startQuiz }) {
  return (
    <div className="menu">
      <h1>Dinosaur Quiz</h1>
      <button onClick={() => startQuiz("normal")}>Start Quiz</button>
      <button onClick={() => startQuiz("hard")}>Hard Mode</button>
    </div>
  );
}

export default MainMenu;
