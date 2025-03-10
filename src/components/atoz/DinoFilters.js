import React from "react";

const DinoFilters = ({
  searchQuery,
  onSearchQueryChange,
  filterPeriod,
  onFilterPeriodChange,
  filterSubPeriod,
  onFilterSubPeriodChange,
  filterDiet,
  onFilterDietChange,
  periods,
  subPeriods,
  diets,
}) => {
  return (
    <>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search dinosaurs..."
          value={searchQuery}
          onChange={(e) => onSearchQueryChange(e.target.value)}
        />
      </div>
      <div className="filters-section mb-3">
        <div className="filters-text">Filters</div>
        <select
          className="form-control mb-2"
          value={filterPeriod}
          onChange={(e) => onFilterPeriodChange(e.target.value)}
        >
          <option value="">All Periods</option>
          {periods.map((period) => (
            <option key={period} value={period}>
              {period}
            </option>
          ))}
        </select>
        {filterPeriod && filterPeriod !== "Late Triassic" && (
          <select
            className="form-control mb-2"
            value={filterSubPeriod}
            onChange={(e) => onFilterSubPeriodChange(e.target.value)}
          >
            <option value="">All Subperiods</option>
            {subPeriods.map((sub) => (
              <option key={sub} value={sub}>
                {sub}
              </option>
            ))}
          </select>
        )}
        <select
          className="form-control"
          value={filterDiet}
          onChange={(e) => onFilterDietChange(e.target.value)}
        >
          <option value="">All Diets</option>
          {diets.map((diet) => (
            <option key={diet} value={diet}>
              {diet}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default DinoFilters;
