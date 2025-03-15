import React from "react";
import { Helmet } from "react-helmet-async";
import DiscoverLink from "../home/DiscoverLink";
import AtoZLink from "../home/AtoZLink";
import QuzziesLink from "../home/QuzziesLink";
import DinosaurOfTheWeek from "./DinosaurOfTheWeek";
import About from "./About";

function App() {
  return (
    <>
      <Helmet>
        <title>dinosaur.directory - Home</title>
        <meta
          name="description"
          content="Welcome to dinosaur.directory, your gateway to exploring dinosaurs. Discover interactive features, dinosaur collections, Dinosaur of the Week, quizzes, and more."
        />
        <link rel="canonical" href="https://dinosaur.directory/" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "dinosaur.directory",
              "url": "https://dinosaur.directory/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://dinosaur.directory/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </script>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "dinosaur.directory",
              "url": "https://dinosaur.directory/",
              "logo": "https://dinosaur.directory/images/logo/logo-circle.png"
            }
          `}
        </script>
      </Helmet>
      <div className="container text-center dynamic-margin-top">
        <div className="row mt-5">
          <div className="col-md-12 mb-4">
            <DiscoverLink />
          </div>
          <div className="col-md-6 mb-4">
            <QuzziesLink />
          </div>
          <div className="col-md-6 mb-4">
            <DinosaurOfTheWeek />
          </div>
          <div className="col-md-6 mb-4">
            <AtoZLink />
          </div>
          <div className="col-md-6 mb-4">
            <About />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
