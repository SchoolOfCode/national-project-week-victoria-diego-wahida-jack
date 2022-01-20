import React, { useState, useEffect } from "react";
import SupportIcon from "@mui/icons-material/Support";
import MeetingRoomOutlinedIcon from "@mui/icons-material/MeetingRoomOutlined";
import PlusOneOutlinedIcon from "@mui/icons-material/PlusOneOutlined";
import PeopleIcon from "@mui/icons-material/People";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";
import "./styles.css";

const API_URL = process.env.REACT_APP_API_URL;

function ProblemButtons({ problem, handleClick }) {
  const [count, setCount] = useState(0);

  function IncrementCount() {
    setCount(count + 1);
    console.log("count");
  }

  async function completeProblem(problem) {
    //Add the relevant data to a new object to POST
    const newSolvedProblem = {
      roomnumber: problem.roomnumber,
      title: problem.title,
      text: problem.text,
    };
    console.log(newSolvedProblem);
    // setProblems([...problems, entry])
    //Post the data to the solved problems table
    const res = await fetch(`${API_URL}/solvedproblems/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSolvedProblem),
    });
    console.log(res);
    //Delete the entry from the old table
    const deleteRes = await fetch(`${API_URL}/unsolvedproblems/${problem.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(deleteRes);
    //Refresh the page to update
    window.location.reload();
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
        <div className="counter">
          <PeopleIcon></PeopleIcon>
          <p>{count}</p>
        </div>
        <button id={problem.id} onClick={() => completeProblem(problem)}>
          <DoneOutlineIcon></DoneOutlineIcon>
        </button>
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
