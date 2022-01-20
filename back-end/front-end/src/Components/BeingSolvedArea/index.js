import React from "react";
import ProblemList from "../ProblemList";

function BeingSolvedArea({ beingSolvedProblems, handleClick }) {
  return (
    <section>
      <h1>Being Solved</h1>
      <ProblemList handleClick={handleClick} problems={beingSolvedProblems}></ProblemList>
    </section>
  );
}

export default BeingSolvedArea;
