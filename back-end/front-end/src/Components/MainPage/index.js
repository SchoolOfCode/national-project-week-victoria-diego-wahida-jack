import React, { useEffect, useState } from "react";
import BeingSolvedArea from "../BeingSolvedArea";
import SolvedArea from "../SolvedArea";
import ToBeSolvedArea from "../ToBeSolvedArea";
import CoachesArea from "../CoachesArea";
import "./styles.css";

const API_URL = process.env.REACT_APP_API_URL;

function MainPage() {
  const [problems, setProblems] = useState([]);
  const [solvedproblems, setSolvedProblems] = useState([]);

  async function newProblems() {
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes();
  }

  newProblems();
  useEffect(() => {
    async function getProblems() {
      //Fetch problems from Heroku backend
      const res = await fetch(`${API_URL}/unsolvedproblems`);
      const result = await res.json();
      let array = [];
      for (let i = 0; i < result.payload.length; i++) {
        array.push(result.payload[i]);
      }
      setProblems(array);
    }
    getProblems();
    const interval = setInterval(() => {
      getProblems();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    async function getSolvedProblems() {
      //Fetch problems from Heroku backend
      const res = await fetch(`${API_URL}/solvedproblems`);
      const result = await res.json();
      let array = [];
      for (let i = 0; i < result.payload.length; i++) {
        array.push(result.payload[i]);
      }
      setSolvedProblems(array);
    }
    getSolvedProblems();
    const interval = setInterval(() => {
      getSolvedProblems();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  //When you click on the button, change the beingsolved: true/false.
  //
  async function toggleToBeingSolved(id) {
    id = Number(id.target.id);
    let index = problems.find((e) => e.id === id);
    console.log(index);
    if (index === undefined) {
      return;
    } else {
      const update = !index.beingsolved;
      console.log({ update });
      const oldproblem = {
        ...index,
        beingsolved: update,
      };

      console.log(oldproblem);

      const res = await fetch(`${API_URL}/unsolvedproblems/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(oldproblem),
      });
      const result = await res.json();
      console.log(result);
    }
  }

  //Run fetch problems function

  return (
    <div>
      <div className="top-section">
        <ToBeSolvedArea
          handleClick={toggleToBeingSolved}
          problems={problems.filter((item) => item.beingsolved !== true)}
        ></ToBeSolvedArea>
        <BeingSolvedArea
          problems={problems.filter((item) => item.beingsolved === true)}
        ></BeingSolvedArea>
        <CoachesArea></CoachesArea>
        {/* <FormPage /> */}
      </div>
      <SolvedArea problems={solvedproblems}></SolvedArea>
    </div>
  );
}

export default MainPage;
