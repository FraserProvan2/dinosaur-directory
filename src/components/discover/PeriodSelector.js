import React from "react";

const PeriodSelector = ({ periods, selectedPeriod, onChange }) => {
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
      />
      <div className="period-text-container text-center">
        <p className="period-text">{selectedPeriod}</p>
      </div>
    </div>
  );
};

export default PeriodSelector;
