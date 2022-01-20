import React, { useRef } from "react";
import ProblemList from "../ProblemList";
import "./styles.css";
import AddIcon from "@mui/icons-material/Add";
import FormPage from "../FormPage";

function ToBeSolvedArea({ problems, handleClick }) {
  const modal = useRef(null);
  return (
    <section className="toBeSolvedArea">
      <div className="header">
        <h1>To Be Solved</h1>
        <AddIcon
          onClick={() => modal.current.open()}
          color="primary"
          fontSize="large"
        ></AddIcon>
      </div>
      <ProblemList handleClick={handleClick} problems={problems}></ProblemList>
      <FormPage ref={modal}></FormPage>
    </section>
  );
}

export default ToBeSolvedArea;
