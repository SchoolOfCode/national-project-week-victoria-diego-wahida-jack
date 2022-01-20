import React, {useState, useEffect} from "react";
import SupportIcon from "@mui/icons-material/Support";
import MeetingRoomOutlinedIcon from "@mui/icons-material/MeetingRoomOutlined";
import PlusOneOutlinedIcon from "@mui/icons-material/PlusOneOutlined";
import PeopleIcon from "@mui/icons-material/People";
import "./styles.css";
import { handleBreakpoints } from "@mui/system";

function ProblemButtons({problems}) {

  const[count,setCount]= useState(0)
  const[show,setShow] = useState(problems.beingSolved === false)


  function IncrementCount(){
    setCount(count +1);
    console.log("count")
  }

  function handleClick(e) {
   
    if(show === true){
      console.log("move to being solved")
    } else {
      console.log("to be solved")
    }
     }
  
  

  if(problems.beingSolved===true) {
    return (
      <div className="problem-buttons">
      <MeetingRoomOutlinedIcon></MeetingRoomOutlinedIcon>
      <PlusOneOutlinedIcon onClick={IncrementCount} id={problems.id}></PlusOneOutlinedIcon>
      <PeopleIcon></PeopleIcon>

      <p>{count}</p>
  
    </div>
    )
  } else {
  return (
    <div className="problem-buttons">
      <MeetingRoomOutlinedIcon></MeetingRoomOutlinedIcon>
      <SupportIcon onClick={handleClick}></SupportIcon>
      <PlusOneOutlinedIcon onClick={IncrementCount} id={problems.id}></PlusOneOutlinedIcon>
      <PeopleIcon></PeopleIcon>
     
    </div>
    
  );
  }
}

export default ProblemButtons;
