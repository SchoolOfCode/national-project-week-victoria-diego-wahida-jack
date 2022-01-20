import React from "react";
import "./styles.css";

function CoachesArea({ clearAllProblems }) {
  return (
    <section>
      <div className = "coaches-heading">
      <h1>Coaches Area</h1>
      <button onClick={(e) => {clearAllProblems()}} >Clear Button</button>
      </div>
    </section>
  );
}

export default CoachesArea;
