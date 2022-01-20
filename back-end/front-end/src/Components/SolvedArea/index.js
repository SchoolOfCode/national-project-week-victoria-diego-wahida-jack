import React from "react";
import "./styles.css";

function SolvedArea({problems}) {
  return (
    <div className="solved-area">
      <section>
        <h1>Solved</h1>
        {problems}
      </section>
    </div>
  );
}

export default SolvedArea;
