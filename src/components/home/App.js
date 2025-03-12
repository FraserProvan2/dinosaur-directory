import React from "react";
import DiscoverLink from "../home/DiscoverLink";
import AtoZLink from "../home/AtoZLink";
import QuzziesLink from "../home/QuzziesLink";
import DinosaurOfTheWeek from "./DinosaurOfTheWeek";
import About from "./About";

function App() {
  return (
    <div className="container text-center dynamic-margin-top">
      <div className="row mt-5">
        <div className="col-md-12 mb-4">
          <DiscoverLink />
        </div>
        <div className="col-md-6 mb-4">
          <AtoZLink />
        </div>
        <div className="col-md-6 mb-4">
          <QuzziesLink />
        </div>
        <div className="col-md-6 mb-4">
          <DinosaurOfTheWeek />
        </div>
        <div className="col-md-6 mb-4">
          <About />
        </div>
      </div>
    </div>
  );
}

export default App;
