import React from "react";
import { Helmet } from "react-helmet-async";
import FaqSection from "./FaqSection";

const App = () => {
  return (
    <>
      <Helmet>
        <title>FAQ - dinosaur.directory</title>
        <meta
          name="description"
          content="Frequently Asked Questions about dinosaurs on dinosaur.directory."
        />
        <link rel="canonical" href="https://dinosaur.directory/faq" />
        <meta property="og:title" content="FAQ - dinosaur.directory" />
        <meta
          property="og:description"
          content="Frequently Asked Questions about dinosaurs on dinosaur.directory."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dinosaur.directory/faq" />
        <meta
          property="og:image"
          content="https://dinosaur.directory/images/dino-faq.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dinosaur_directory" />
        <meta name="twitter:title" content="FAQ - dinosaur.directory" />
        <meta
          name="twitter:description"
          content="Frequently Asked Questions about dinosaurs on dinosaur.directory."
        />
        <meta
          name="twitter:image"
          content="https://dinosaur.directory/images/dino-faq.png"
        />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "What is dinosaur.directory?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "dinosaur.directory is a comprehensive directory of dinosaurs, offering detailed information, interactive maps, and an A–Z guide to prehistoric creatures."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How can I contribute to the FAQ?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "If you have suggestions or find errors, please contact us at support@dinosaur.directory."
                  }
                }
              ]
            }
          `}
        </script>
      </Helmet>
      <div className="container py-3">
        <FaqSection />
      </div>
    </>
  );
};

export default App;
