import React from "react";
import ProblemDetails from "../ProblemDetails";
import ProblemButtons from "../ProblemButtons";
import "./styles.css";

function ProblemRow({ problem, handleClick }) {
  return (
    <div className="problemRow">
      <ProblemDetails problem={problem}></ProblemDetails>
      <ProblemButtons
        handleClick={handleClick}
        problem={problem}
      ></ProblemButtons>
    </div>
  );
}

export default ProblemRow;
