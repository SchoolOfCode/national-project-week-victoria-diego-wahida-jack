import React from "react";
import "./styles.css";

function ProblemDetails({ problem }) {
  return (
    <div className="problem-details">
      <div className="problem-header">
        <h4>Room # </h4>
        <h2>{problem.title}</h2>
        <p>{problem.time}</p>
      </div>
      <div className="problem-room-number">
        <header>{problem.roomnumber}</header>
        <p>{problem.text}</p>
        <div></div>
      </div>
    </div>
  );
}

export default ProblemDetails;
