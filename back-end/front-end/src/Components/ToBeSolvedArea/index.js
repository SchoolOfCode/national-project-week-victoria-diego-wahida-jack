import React from "react";
import ProblemList from "../ProblemList";
import "./styles.css";

function ToBeSolvedArea({ problems }) {
  return (
    <section className="toBeSolvedArea">
      <h1>To Be Solved</h1>
      <ProblemList problems={problems}></ProblemList>
    </section>
  );
}

export default ToBeSolvedArea;
