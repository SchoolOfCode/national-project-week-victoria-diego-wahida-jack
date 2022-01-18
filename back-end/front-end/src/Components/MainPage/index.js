import React from "react";
import BeingSolvedArea from "../BeingSolvedArea";
import SolvedArea from "../SolvedArea";
import ToBeSolvedArea from "../ToBeSolvedArea";
import CoachesArea from "../CoachesArea";
import "./styles.css";

function MainPage() {
  return (
    <div>
      <div className="top-section">
        <ToBeSolvedArea></ToBeSolvedArea>
        <BeingSolvedArea></BeingSolvedArea>
        <CoachesArea></CoachesArea>
      </div>
      <SolvedArea></SolvedArea>
    </div>
  );
}

export default MainPage;
