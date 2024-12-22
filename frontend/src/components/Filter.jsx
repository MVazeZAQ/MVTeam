import React from "react";

const filter = ["Business", "Personal", "Important"];

const Filter = () => {
  return (
    <div className="container" style={{ width: "500px", margin: "20px auto" }}>
      <label htmlFor="note-filter" className="form-label">
        Filter Notes
      </label>
      <select
        id="note-filter"
        className="form-select"
        aria-label="Filter Notes"
        style={{ height: "50px" }}
        defaultValue=""
      >
        <option value="" disabled>
          Select Filter
        </option>
        {filter.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
