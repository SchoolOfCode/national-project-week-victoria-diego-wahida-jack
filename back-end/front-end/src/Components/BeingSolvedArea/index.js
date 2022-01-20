import React from "react";
import ProblemList from "../ProblemList";

function BeingSolvedArea({ problems, handleClick }) {
  return (
    <section>
      <h1>Being Solved</h1>
      <ProblemList handleClick={handleClick} problems={problems}></ProblemList>
    </section>
  );
}

export default BeingSolvedArea;
