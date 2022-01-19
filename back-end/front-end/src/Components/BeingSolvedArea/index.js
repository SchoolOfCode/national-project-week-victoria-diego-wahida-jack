import React from "react";
import ProblemList from "../ProblemList";

function BeingSolvedArea({ problems }) {
  return (
    <section>
      <h1>Being Solved</h1>
      <ProblemList problems={problems}></ProblemList>
    </section>
  );
}

export default BeingSolvedArea;
