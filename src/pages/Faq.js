import React from "react";
import FaqPage from "../components/faq/App";
import Footer from "../components/layout/Footer";

function Faq() {
  return (
    <div className="container dynamic-margin-top">
      <h1 className="text-center">FAQ</h1>
      <FaqPage />
      <Footer />
    </div>
  );
}

export default Faq;
