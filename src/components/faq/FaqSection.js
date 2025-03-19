import React from "react";
import FaqData from "../../data/faq.json";

const FaqSection = () => {
  return (
    <div className="accordion" id="faqAccordion">
      {FaqData.map((faq, index) => {
        const headingId = `heading${index}`;
        const collapseId = `collapse${index}`;
        return (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={headingId}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${collapseId}`}
                aria-expanded="false"
                aria-controls={collapseId}
              >
                {faq.q}
              </button>
            </h2>
            <div
              id={collapseId}
              className="accordion-collapse collapse"
              aria-labelledby={headingId}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">{faq.a}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FaqSection;
