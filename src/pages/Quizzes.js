import React from "react";
import QuizzesPage from "../components/quizzes/App";
import Footer from "../components/layout/Footer";

function Quizzes() {
  return (
    <div className="container dynamic-margin-top">
      <h1 className="text-center">Dinosaur Quizzes</h1>
      <QuizzesPage />
      <Footer />
    </div>
  );
}

export default Quizzes;
