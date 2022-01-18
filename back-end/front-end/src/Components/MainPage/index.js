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
    text: "Problem description text",
  },
  {
    roomNumber: 2,
    title: "Problem 2",
    text: "Problem description text",
  },
  {
    roomNumber: 3,
    title: "Problem 3",
    text: "Problem description text",
  },
];

function MainPage() {
  const [problems, setProblems] = useState([...unsolvedProblems]);

  async function getProblems() {
    //Fetch problems from Heroku backend
    const res = await fetch("https://national-project.herokuapp.com/");
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
