import React from "react";
import "./styles.css";

function ProblemDetails({ problems }) {
  return (
    <div>
      <div className="problem-header">
        <h3>Room # </h3>
        <h2>{problems.title}</h2>
        <p>{problems.time}</p>
      </div>
      <div className="problem-room-number">
        <header>{problems.roomNumber}</header>
        <p>{problems.text}</p>
        <div></div>
      </div>
    </div>
  );
}

export default ProblemDetails;
