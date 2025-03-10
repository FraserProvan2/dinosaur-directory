import React from "react";
import DinoList from "../components/atoz/DinoList";

function AtoZ() {
  return (
    <div className="container dynamic-margin-top">
      <h1 className="text-center text-primary">Dinosaur A-Z</h1>
      <DinoList />
    </div>
  );
}

export default AtoZ;
