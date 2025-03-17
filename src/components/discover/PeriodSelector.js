import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tooltip } from "bootstrap";

const PeriodSelector = ({ periods, selectedPeriod, onChange }) => {
  const sliderRef = useRef(null);
  const tooltipRef = useRef(null);

  useEffect(() => {
    if (!localStorage.getItem("tooltipShown")) {
      const tooltip = new Tooltip(sliderRef.current, {
        title: "Use the slider to select a period",
        placement: "right",
        trigger: "manual",
      });

      setTimeout(() => {
        tooltip.show();
      }, 3000);

      tooltipRef.current = tooltip;
      localStorage.setItem("tooltipShown", "true");

      setTimeout(() => {
        tooltip.hide();
      }, 9000);
    }
  }, []);

  return (
    <div className="period-selector">
      <input
        type="range"
        min="0"
        max={periods.length - 1}
        step="1"
        value={periods.indexOf(selectedPeriod)}
        onChange={(e) => onChange(periods[e.target.value])}
        className="period-slider"
        ref={sliderRef}
        data-bs-toggle="tooltip"
      />
      <div className="period-text-container text-center">
        <p className="period-text">{selectedPeriod}</p>
      </div>
    </div>
  );
};

export default PeriodSelector;