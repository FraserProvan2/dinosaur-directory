import React from "react";

function QuzziesLink() {
  return (
    <div className="card h-100 home-card--regular">
      <a href="/quizzes">
        <img
          src="/images/home/quizzes.png"
          className="card-img-top"
          alt="Quizzes"
          loading="lazy"
        />
      </a>
      <div className="card-body d-flex flex-column">
        <a href="/quizzes" className="text-decoration-none text-dark">
          <h5 className="card-title">Quizzes</h5>
        </a>
        <p className="card-text">
          Test your dinosaur knowledge with our fun quizzes. Challenge yourself
          and learn cool facts along the way.
        </p>
        <a href="/quizzes" className="btn btn-primary home-btn mt-auto">
          Take a Quiz
        </a>
      </div>
    </div>
  );
}

export default QuzziesLink;
