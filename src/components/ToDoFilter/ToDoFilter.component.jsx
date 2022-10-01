import uuid from "react-uuid";

import "./ToDoFilter.styles.css";

const ToDoFilter = ({ handleFilter, currentFilter }) => {
  const btns = ["all", "active", "completed"];

  return (
    <div className="filter">
      {btns.map((btn) => (
        <button
          name={btn}
          className={`btn filter-btn txt-fix ${
            btn === currentFilter ? "active" : ""
          }`}
          onClick={(e) => handleFilter(e.target.name)}
          key={uuid()}
        >
          {btn[0].toUpperCase() + btn.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default ToDoFilter;
