import React from "react";
import ProblemList from "../ProblemList";

function ToBeSolvedArea({problems}) {
  return (
    <section>
      <h1>To Be Solved</h1>
      <ProblemList problems={problems}></ProblemList>

    </section>
  );
}

export default ToBeSolvedArea;
