import React from "react";

function Home() {
  return (
    <div className="container text-center dynamic-margin-top">
      <div className="row mt-5">
        {/* Discover Section */}
        <div className="col-md-12 mb-4">
          <div className="card h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Discover Dinosaurs</h5>
              <p className="card-text">
                Explore our interactive globe. Drag the sliders through
                different eras and click on countries to see which dinosaurs
                were found.
              </p>
              <a href="/discover" className="btn btn-primary mt-auto">
                Explore Discover
              </a>
            </div>
          </div>
        </div>

        {/* Dinosaur A-Z Section */}
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Dinosaur A-Z</h5>
              <p className="card-text">
                Browse our comprehensive list of dinosaurs from A to Z and
                explore detailed information on each species.
              </p>
              <a href="/a-z" className="btn btn-secondary mt-auto">
                Browse A-Z
              </a>
            </div>
          </div>
        </div>

        {/* Quizzes Section */}
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Quizzes</h5>
              <p className="card-text">
                Test your dinosaur knowledge with our fun quizzes. Challenge
                yourself and learn cool facts along the way.
              </p>
              <a href="/quizzes" className="btn btn-primary mt-auto">
                Take a Quiz
              </a>
            </div>
          </div>
        </div>

        {/* Dinosaur of the Week */}
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Dinosaur of the Week</h5>
              <p className="card-text">
                Check out our featured dinosaur of the week. Learn its history,
                interesting facts, and see why it stands out.
              </p>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">About</h5>
              <p className="card-text">About + our data</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
