import React from "react";
import ProblemDetails from "../ProblemDetails";
import ProblemButtons from "../ProblemButtons";
import "./styles.css";

function ProblemRow({ problem, handleClick }) {
  let today = new Date()
  let usertime = problem.time
  let userTimeSplit = usertime.split(":")

  var currentTime = new Date(2022,0,1,today.getHours(), today.getMinutes())
  var problemTime = new Date(2022,0,1,userTimeSplit[0], userTimeSplit[1])

  if(problem.beingsolved === false) {
  return (
    <div className= {currentTime-problemTime > 900000 ? currentTime-problemTime > 1800000 ? "problemRowRed": "problemRowYellow": "problemRowGreen"}>
      <ProblemDetails problem={problem}></ProblemDetails>
      <ProblemButtons
        handleClick={handleClick}
        problem={problem}
      ></ProblemButtons>
    </div>
  );
} else {
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
}

export default ProblemRow;
