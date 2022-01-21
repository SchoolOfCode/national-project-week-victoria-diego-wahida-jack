import React from "react";
import ProblemList from "../ProblemList";
import "./styles.css"


export default BeingSolvedArea;

function BeingSolvedArea({ beingSolvedProblems, handleClick }) {
  return (
    <section className="beingSolved-area">
      <h1 className="header-beingSolved">Being Solved</h1>
      <ProblemList handleClick={handleClick} problems={beingSolvedProblems}></ProblemList>
    </section>
  );
}