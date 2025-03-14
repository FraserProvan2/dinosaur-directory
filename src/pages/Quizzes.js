import React from "react";
import QuizzesPage from "../components/quizzes/App";
import Footer from "../components/layout/Footer";

function Quizzes() {
  return (
    <div className="container dynamic-margin-top">
      <QuizzesPage />
      <Footer />
    </div>
  );
}

export default Quizzes;
