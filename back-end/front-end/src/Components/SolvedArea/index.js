import React from "react";
import "./styles.css";
import ProblemDetails from "../ProblemDetails";

function SolvedArea({ problems }) {
  return (
    <div className="solved-area">
      <section>
        <h1>Solved Problems</h1>
        <div className="solved-list">
          {problems.map((item, index) => {
            return (
              <ProblemDetails problem={item} key={item.id}></ProblemDetails>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default SolvedArea;
