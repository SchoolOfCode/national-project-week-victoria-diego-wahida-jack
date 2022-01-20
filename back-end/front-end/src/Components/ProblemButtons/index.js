import React, { useState, useEffect } from "react";
import SupportIcon from "@mui/icons-material/Support";
import MeetingRoomOutlinedIcon from "@mui/icons-material/MeetingRoomOutlined";
import PlusOneOutlinedIcon from "@mui/icons-material/PlusOneOutlined";
import PeopleIcon from "@mui/icons-material/People";
import "./styles.css";

function ProblemButtons({ problem, handleClick }) {
  const [count, setCount] = useState(0);

  function IncrementCount() {
    setCount(count + 1);
    console.log("count");
  }

  if (problem.beingsolved === true) {
    return (
      <div className="problem-buttons">
        <button id={problem.id} onClick={() => handleClick(problem.id)}>
        <SupportIcon></SupportIcon>
        </button>
        <PlusOneOutlinedIcon
          onClick={IncrementCount}
          id={problem.id}
        ></PlusOneOutlinedIcon>
        <PeopleIcon></PeopleIcon>

        <p>{count}</p>
      </div>
    );
  } else if (problem.beingsolved === false) {
    return (
      <div className="problem-buttons">
        <MeetingRoomOutlinedIcon></MeetingRoomOutlinedIcon>
        <button id={problem.id} onClick={() => handleClick(problem.id)}>
        <SupportIcon></SupportIcon>
        </button>
        <PlusOneOutlinedIcon
          onClick={IncrementCount}
          id={problem.id}
        ></PlusOneOutlinedIcon>
        <PeopleIcon></PeopleIcon>
      </div>
    );
  } else {
    return null;
  }
}

export default ProblemButtons;
