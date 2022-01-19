import React from "react";
import ProblemRow from "../ProblemRow";
import "./styles.css";

function ProblemList({ problems }) {
  console.log(problems);
  return (
    <div className="problem-list">
      {problems.map((item, index) => {
        console.log(item);
        return <ProblemRow problems={item} key={index}></ProblemRow>;
      })}
    </div>
  );
}

export default ProblemList;
