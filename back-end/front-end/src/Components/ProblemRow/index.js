import React from "react";
import ProblemDetails from "../ProblemDetails";
import ProblemButtons from "../ProblemButtons";
import "./styles.css";

function ProblemRow({ problems, show }) {
  return (
    <div className="problemRow">
      <ProblemDetails problems={problems}></ProblemDetails>
      <ProblemButtons problems={problems}></ProblemButtons>
    </div>
  );
}

export default ProblemRow;
