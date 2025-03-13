import React from "react";
import DiscoverPage from "../components/discover/App";
import Footer from "../components/layout/Footer";

function Discover() {
  return (
    <div className="container dynamic-margin-top">
      <h1 className="text-center">Discover the Mesozoic Era</h1>
      <DiscoverPage />
      <Footer />
    </div>
  );
}

export default Discover;
