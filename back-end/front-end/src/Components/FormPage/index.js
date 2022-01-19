import React from 'react'

function FormPage() {
    
    return (
        <section>
        <h1>Form Page</h1>
        <input placeholder="room #"></input>
        <br></br>
        <input placeholder="problem title"></input>
        <br></br>
        <input placeholder="steps taken to solve problem"></input>
        <br></br>
        <label>
            Have you googled it?
        <input type="checkbox"></input>
        </label>
        <br></br>
        <button>Submit</button>
      </section>
    );
}

export default FormPage;