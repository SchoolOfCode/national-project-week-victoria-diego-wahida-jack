import React, { useState, useEffect } from "react";
import SupportIcon from "@mui/icons-material/Support";
import MeetingRoomOutlinedIcon from "@mui/icons-material/MeetingRoomOutlined";
import PlusOneOutlinedIcon from "@mui/icons-material/PlusOneOutlined";
import PeopleIcon from "@mui/icons-material/People";
import "./styles.css";

function ProblemButtons({ problems, handleClick }) {
  const [count, setCount] = useState(0);

  function IncrementCount() {
    setCount(count + 1);
    console.log("count");
  }

  if (problems.beingsolved === true) {
    return (
      <div className="problem-buttons">
        <MeetingRoomOutlinedIcon></MeetingRoomOutlinedIcon>
        <PlusOneOutlinedIcon
          onClick={IncrementCount}
          id={problems.id}
        ></PlusOneOutlinedIcon>
        <PeopleIcon></PeopleIcon>

        <p>{count}</p>
      </div>
    );
  } else {
    return (
      <div className="problem-buttons">
        <MeetingRoomOutlinedIcon></MeetingRoomOutlinedIcon>
        <SupportIcon
          id={problems.id}
          onClick={(e) => handleClick(e)}
        ></SupportIcon>
        <PlusOneOutlinedIcon
          onClick={IncrementCount}
          id={problems.id}
        ></PlusOneOutlinedIcon>
        <PeopleIcon></PeopleIcon>
      </div>
    );
  }
}

export default ProblemButtons;
