import React from "react";
import AtoZPage from "../components/atoz/App";
import Footer from "../components/layout/Footer";

function AtoZ() {
  return (
    <div className="container dynamic-margin-top">
      <h1 className="text-center">Dinosaur A-Z</h1>
      <AtoZPage />
      <Footer />
    </div>
  );
}

export default AtoZ;
