import React from "react";
import SupportIcon from "@mui/icons-material/Support";
import MeetingRoomOutlinedIcon from "@mui/icons-material/MeetingRoomOutlined";
import PlusOneOutlinedIcon from "@mui/icons-material/PlusOneOutlined";
import PeopleIcon from "@mui/icons-material/People";
import "./styles.css";

function ProblemButtons({problems}) {


  function handleClick(e) {
    console.log("hello");
  }

  if(problems.beingSolved===true) {
    return (
      <div className="problem-buttons">
      <MeetingRoomOutlinedIcon></MeetingRoomOutlinedIcon>
      <PlusOneOutlinedIcon onClick={handleClick} id={problems.id}></PlusOneOutlinedIcon>
      <PeopleIcon></PeopleIcon>
    </div>
    )
  } else {
  return (
    <div className="problem-buttons">
      <MeetingRoomOutlinedIcon></MeetingRoomOutlinedIcon>
      <SupportIcon onClick={handleClick}></SupportIcon>
      <PlusOneOutlinedIcon onClick={handleClick} id={problems.id}></PlusOneOutlinedIcon>
      <PeopleIcon></PeopleIcon>
    </div>
  );
  }
}

export default ProblemButtons;
