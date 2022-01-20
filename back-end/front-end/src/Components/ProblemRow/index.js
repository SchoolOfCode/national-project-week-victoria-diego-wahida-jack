import React from "react";
import ProblemDetails from "../ProblemDetails";
import ProblemButtons from "../ProblemButtons";
import "./styles.css";

function ProblemRow({ problems, show, handleClick }) {
  return (
    <div className="problemRow">
      <ProblemDetails problems={problems}></ProblemDetails>
      <ProblemButtons
        handleClick={handleClick}
        problems={problems}
      ></ProblemButtons>
    </div>
  );
}

export default ProblemRow;
