import React, { useEffect, useState } from "react";
import BeingSolvedArea from "../BeingSolvedArea";
import SolvedArea from "../SolvedArea";
import ToBeSolvedArea from "../ToBeSolvedArea";
import CoachesArea from "../CoachesArea";
import "./styles.css";

// export const unsolvedProblems = [
//   {
//     id: 1,
//     roomNumber: 1,
//     title: "Problem 1",
//     text: "We cannot fetch an API, it doesn't work",
//     dateandtime: "Wed Jan 19 2022 10:16:42 GMT+0000 (Greenwich Mean Time)",
//     time: "10:16",
//     beingSolved: true,
//   },
//   {
//     id: 2,
//     roomNumber: 2,
//     title: "Problem 2",
//     text: "We cannot fetch an API, it doesn't work",
//     dateandtime: "Thurs Jan 20 2022 10:17:42 GMT+0000 (Greenwich Mean Time)",
//     time: "10:17",
//     beingSolved: false,
//   },
//   {
//     id: 3,
//     roomNumber: 3,
//     title: "Problem 3",
//     text: "We cannot fetch an API, it doesn't work",
//     dateandtime: "Fri Jan 21 2022 10:18:42 GMT+0000 (Greenwich Mean Time)",
//     time: "10:18",
//     beingSolved: false,
//   },
//   {
//     roomNumber: 4,
//     title: "Problem 4",
//     text: "We cannot fetch an API, it doesn't work",
//     dateandtime: "Fri Jan 21 2022 10:18:42 GMT+0000 (Greenwich Mean Time)",
//     time: "10:30",
//     beingSolved: false,
//     id: 4,
//   },
//   {
//     roomNumber: 5,
//     title: "Problem 5",
//     text: "We cannot fetch an API, it doesn't work",
//     dateandtime: "Fri Jan 21 2022 10:18:42 GMT+0000 (Greenwich Mean Time)",
//     time: "10:45",
//     beingSolved: false,
//     id: 5,
//   },
// ];

const API_URL = process.env.REACT_APP_API_URL;

function MainPage() {
  const [problems, setProblems] = useState([]);

  async function newProblems() {
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes();
  }

  newProblems();
useEffect(()=> {
  async function getProblems() {
    //Fetch problems from Heroku backend
    const res = await fetch(`${API_URL}/unsolvedproblems`);
    const result = await res.json();
    let array = []
    for(let i=0; i<result.payload.length; i++) {
      array.push(result.payload[i])
    }
    console.log("get problems fire")  
    setProblems(array)
  }
  getProblems();
},[])


//When you click on the button, change the beingsolved: true/false. 
//
 async  function toggleToBeingSolved(id) {
    let index = problems.findIndex((e) => e.id === id)
    const update = !problems[index].beingsolved
    const oldproblem  = {...problems[index], [problems[index].beingsolved]: update}
    console.log(oldproblem)

    const res = await fetch(`${API_URL}/unsolvedproblems/${id}`, 
    {
      method: 'PUT',
      headers:{
      'Content-Type':'application/json'
      },
      body: JSON.stringify(oldproblem)
    });
    const result = await res.json();
    console.log(result)
  }

  //Run fetch problems function

  return (
    <div>
      <div className="top-section">
        <ToBeSolvedArea problems={problems.filter((item) => item.beingsolved !== true)}></ToBeSolvedArea>
        <BeingSolvedArea problems={ problems.filter((item) => item.beingsolved === true)}></BeingSolvedArea>
        <CoachesArea></CoachesArea>
        {/* <FormPage /> */}
      </div>
      <SolvedArea></SolvedArea>
    </div>
  );
}

export default MainPage;
