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
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    //Fetch users from Heroku backend
    const res = await fetch(`${API_URL}/users`);
    const result = await res.json();
    const array = result.payload;
    setUsers(array);
  };

  useEffect(() => {
    getUsers();
    const interval = setInterval(() => {
      getUsers();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  function IncrementCount() {
    setCount(count + 1);
    console.log("count");
  }

  async function findCoachesInRoom(room) {
    //Find coach in room
    let coach = users.find((coach, index) => coach.roomnumber === room);
    console.log(coach);
    //If no coaches found return
    if (coach === undefined) {
      console.log("no coaches in room");
      return;
    } else {
      console.log("coach found in room: " + coach);
      //Update the coach room back to 0
      coach = { ...coach, roomnumber: 0 };
      let id = coach.id;
      console.log({ coach });
      const res = await fetch(`${API_URL}/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(coach),
      });
      return res;
    }
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
    //Kick the coaches from the room
    await findCoachesInRoom(newSolvedProblem.roomnumber);
    //Refresh the page to update
    window.location.reload();
  }

  if (problem.beingsolved === true) {
    return (
      <div className="problem-buttons">
        <button id={problem.id} onClick={() => handleClick(problem.id)}>
          <SupportIcon></SupportIcon>
        </button>
        <button onClick={IncrementCount} id={problem.id}>
          <PlusOneOutlinedIcon></PlusOneOutlinedIcon>
        </button>
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
        <button id={problem.id} onClick={() => handleClick(problem.id)}>
          <SupportIcon></SupportIcon>
        </button>
        <button onClick={IncrementCount} id={problem.id}>
          <PlusOneOutlinedIcon></PlusOneOutlinedIcon>
        </button>
        <div className="counter">
          <PeopleIcon></PeopleIcon>
          <p>{count}</p>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default ProblemButtons;
