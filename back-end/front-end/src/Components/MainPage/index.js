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

  const getProblems = async () => {
    //Fetch problems from Heroku backend
    const res = await fetch(`${API_URL}/unsolvedproblems`);
    const result = await res.json();
    let array = [];
    for (let i = 0; i < result.payload.length; i++) {
      array.push(result.payload[i]);
    }
    setProblems(array);
  };

  useEffect(() => {
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
      // let array = [];
      // for (let i = 0; i < result.payload.length; i++) {
      //   array.push(result.payload[i]);
      // }
      const array = result.payload;
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
  async function toggleToBeingSolved(event) {
    // console.log(event);
    // const problemID = Number(event.target.id);
    let index = problems.find((e) => e.id === event);
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

      const res = await fetch(`${API_URL}/unsolvedproblems/${event}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(oldproblem),
      });
      const result = await res.json();
    }
    getProblems();
  }

  async function clearAllProblems() {
    const res = await fetch(`${API_URL}/unsolvedproblems`);
    const result = await res.json();
    let array = [];
    for (let i = 0; i < result.payload.length; i++) {
      array.push(result.payload[i]);
    }
    setProblems(array);
    problems.map(async (item) => {
      console.log("great");
      const res = await fetch(`${API_URL}/unsolvedproblems/${item.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await res.json();
    });
  }

  return (
    <div>
      <div className="top-section">
        <ToBeSolvedArea
          handleClick={toggleToBeingSolved}
          unsolvedproblems={problems.filter(
            (item) => item.beingsolved !== true
          )}
          setProblems={setProblems}
          problems={problems}
        ></ToBeSolvedArea>
        <BeingSolvedArea
          handleClick={toggleToBeingSolved}
          beingSolvedProblems={problems.filter(
            (item) => item.beingsolved === true
          )}
        ></BeingSolvedArea>
        <CoachesArea
          clearAllProblems={clearAllProblems}
          unsolvedproblems={problems}
        ></CoachesArea>
      </div>
      <SolvedArea problems={solvedproblems}></SolvedArea>
    </div>
  );
}

export default MainPage;
