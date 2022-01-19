import React, { useState } from "react";
import BeingSolvedArea from "../BeingSolvedArea";
import SolvedArea from "../SolvedArea";
import ToBeSolvedArea from "../ToBeSolvedArea";
import CoachesArea from "../CoachesArea";
import "./styles.css";

export const unsolvedProblems = [
  {
    roomNumber: 1,
    title: "Problem 1",
    text: "We cannot fetch an API, it doesn't work",
    dateandtime: "Wed Jan 19 2022 10:16:42 GMT+0000 (Greenwich Mean Time)",
    time: "10:16",
  },
  {
    roomNumber: 2,
    title: "Problem 2",
    text: "We cannot fetch an API, it doesn't work",
    dateandtime: "Thurs Jan 20 2022 10:17:42 GMT+0000 (Greenwich Mean Time)",
    time: "10:17",
  },
  {
    roomNumber: 3,
    title: "Problem 3",
    text: "We cannot fetch an API, it doesn't work",
    dateandtime: "Fri Jan 21 2022 10:18:42 GMT+0000 (Greenwich Mean Time)",
    time: "10:18",
  },
  {
    roomNumber: 4,
    title: "Problem 4",
    text: "We cannot fetch an API, it doesn't work",
    dateandtime: "Fri Jan 21 2022 10:18:42 GMT+0000 (Greenwich Mean Time)",
    time: "10:30",
  },
  {
    roomNumber: 5,
    title: "Problem 5",
    text: "We cannot fetch an API, it doesn't work",
    dateandtime: "Fri Jan 21 2022 10:18:42 GMT+0000 (Greenwich Mean Time)",
    time: "10:45",
  },
];

const API_URL = process.env.REACT_APP_API_URL;

function MainPage() {
  const [problems, setProblems] = useState([...unsolvedProblems]);

  async function newProblems() {
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes();
    console.log(time);
    console.log(today);
  }

  newProblems();

  async function getProblems() {
    //Fetch problems from Heroku backend
    console.log(API_URL);
    const res = await fetch(`${API_URL}/users`);
    const result = await res.json();
    console.log(result);
  }
  //Run fetch problems function
  getProblems();
  console.log(problems);

  return (
    <div>
      <div className="top-section">
        <ToBeSolvedArea problems={problems}></ToBeSolvedArea>
        <BeingSolvedArea problems={problems}></BeingSolvedArea>
        <CoachesArea></CoachesArea>
      </div>
      <SolvedArea></SolvedArea>
    </div>
  );
}

export default MainPage;
