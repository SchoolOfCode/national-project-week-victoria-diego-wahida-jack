import React from 'react'
import "./styles.css" 

function ProblemDetails({problems}) {
    return (
       <div>
       <div className="problem-header">
           <h3>Room # </h3>
        <h2>{problems[0].title}</h2> 
        <p>{problems[0].time}</p>   
        </div>
        <div className="problem-room-number">
        <header>{problems[0].roomNumber}</header>
        <p>{problems[0].text}</p>
        <div></div>
        </div>
        </div>
    )
}

export default ProblemDetails
