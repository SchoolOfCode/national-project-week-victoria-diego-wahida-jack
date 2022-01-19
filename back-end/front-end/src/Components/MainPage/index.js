import React, { useState } from "react";
import BeingSolvedArea from "../BeingSolvedArea";
import SolvedArea from "../SolvedArea";
import ToBeSolvedArea from "../ToBeSolvedArea";
// import CoachesArea from "../CoachesArea";
import FormPage from "../FormPage"
import "./styles.css";

export const unsolvedProblems = [
  {
    id: 1,
    roomNumber: 1,
    title: "Problem 1",
    text: "We cannot fetch an API, it doesn't work",
    dateandtime: "Wed Jan 19 2022 10:16:42 GMT+0000 (Greenwich Mean Time)",
    time: "10:16",
    beingSolved: true,
  },
  {
    id: 2,
    roomNumber: 2,
    title: "Problem 2",
    text: "We cannot fetch an API, it doesn't work",
    dateandtime: "Thurs Jan 20 2022 10:17:42 GMT+0000 (Greenwich Mean Time)",
    time: "10:17",
    beingSolved: false,
  },
  {
    id: 3,
    roomNumber: 3,
    title: "Problem 3",
    text: "We cannot fetch an API, it doesn't work",
    dateandtime: "Fri Jan 21 2022 10:18:42 GMT+0000 (Greenwich Mean Time)",
    time: "10:18",
    beingSolved: false,
  },
  {
    roomNumber: 4,
    title: "Problem 4",
    text: "We cannot fetch an API, it doesn't work",
    dateandtime: "Fri Jan 21 2022 10:18:42 GMT+0000 (Greenwich Mean Time)",
    time: "10:30",
    beingSolved: false,
    id: 4,
  },
  {
    roomNumber: 5,
    title: "Problem 5",
    text: "We cannot fetch an API, it doesn't work",
    dateandtime: "Fri Jan 21 2022 10:18:42 GMT+0000 (Greenwich Mean Time)",
    time: "10:45",
    beingSolved: false,
    id: 5,
  },
];

const API_URL = process.env.REACT_APP_API_URL;

function MainPage() {
  const [problems, setProblems] = useState([...unsolvedProblems]);

  let toBeSolved = problems.filter((item) => item.beingSolved === false);
  let beingSolved = problems.filter((item) => item.beingSolved === true);

  async function newProblems() {
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes();
  }

  newProblems();

  async function getProblems() {
    //Fetch problems from Heroku backend
    const res = await fetch(`${API_URL}/unsolvedproblems`);
    const result = await res.json();
    console.log(result);
  }

  getProblems();
  console.log(problems);

  // async function toggleToBeingSolved(id) {
  //   let index = problems.findIndex((e) => e.id === id)
  //  let ammendedItem = {...problems[index], beingSolved: !problems[index].beingSolved}
  //   setProblems([...problems[0,index],  ammendedItem])
  //   const problems = [...problems, ]
  // }

  //Run fetch problems function

  // create a function that renders the unsolved problem data in to be solved column
  async function fetchProblems(){
    const res = fetch(API_URL,{
      method: 'PUT',
      headers:{
      'Content-Type':'application/json'
      },
      body: JSON.stringify(unsolvedProblems)
    })
    console.log(res)
  }

  fetchProblems()


  return (
    <div>
      <div className="top-section">
        <ToBeSolvedArea problems={toBeSolved}></ToBeSolvedArea>
        <BeingSolvedArea problems={beingSolved}></BeingSolvedArea>
        {/* <CoachesArea></CoachesArea> */}
        <FormPage />
      </div>
      <SolvedArea></SolvedArea>
    </div>
  );
}

export default MainPage;
