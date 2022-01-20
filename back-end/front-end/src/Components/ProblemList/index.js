import React from "react";
import ProblemRow from "../ProblemRow";
import "./styles.css";

function ProblemList({ problems, handleClick }) {
  return (
    <div className="problem-list">
      {problems.map((item, index) => {
        return (
          <ProblemRow
            handleClick={handleClick}
            problem={item}
            key={item.id}
          ></ProblemRow>
        );
      })}
    </div>
  );
}

export default ProblemList;
