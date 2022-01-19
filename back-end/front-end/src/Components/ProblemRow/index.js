import React from "react";
import ProblemDetails from "../ProblemDetails";
import ProblemButtons from "../ProblemButtons";
import "./styles.css";

function ProblemRow({ problems }) {
  return (
    <div className="problemRow">
      <ProblemDetails problems={problems}></ProblemDetails>
      <ProblemButtons></ProblemButtons>
    </div>
  );
}

export default ProblemRow;
