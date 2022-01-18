import React from "react";
import SupportIcon from "@mui/icons-material/Support";
import MeetingRoomOutlinedIcon from "@mui/icons-material/MeetingRoomOutlined";
import PlusOneOutlinedIcon from "@mui/icons-material/PlusOneOutlined";
import PeopleIcon from "@mui/icons-material/People";
import "./styles.css";

function ProblemButtons() {
  return (
    <div className="problem-buttons">
      <MeetingRoomOutlinedIcon></MeetingRoomOutlinedIcon>
      <SupportIcon></SupportIcon>
      <PlusOneOutlinedIcon></PlusOneOutlinedIcon>
      <PeopleIcon></PeopleIcon>
    </div>
  );
}

export default ProblemButtons;
