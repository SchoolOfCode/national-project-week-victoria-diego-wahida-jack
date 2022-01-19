import React, {useState} from 'react'

function FormPage() {
    const formTemplate = {
        person: "",
        roomNumber: "",
        problemTitle: "",
        steps: "",
        checkbox: false
    }

    const [formData,setFormData] = useState(formTemplate)
    const [validForm, setValidForm] = useState(true)

    function handleChange(item,value) {
        setFormData({...formData, [item]:value})
        
        if(formData.person === "" || formData.roomNumber === "" || formData.problemTitle=== "" || formData.steps=== "" || formData.checkbox === false) {
            console.log(formData.checkbox)
            return;
        } else {
            setValidForm(false)
        }

    }

    function clearForm() {
        setFormData(formTemplate)
        setValidForm(true)
    }

    return (
        <section>
        <h1>Form Page</h1>
        <label>
            Have you googled it?
        <input type="checkbox" checked={formData.checkbox} value={formData.checkbox} onChange={(e)=> handleChange("checkbox", e.target.checked)} ></input>
        </label>
        <br></br>
        <input placeholder = "enter your name" onChange={(e)=> handleChange("person", e.target.value)} value={formData.person}></input>
        <br></br>
        <input placeholder="room #" onChange={(e)=> handleChange("roomNumber", e.target.value)} value={formData.roomNumber}></input>
        <br></br>
        <input placeholder="problem title" onChange={(e)=> handleChange("problemTitle", e.target.value)} value={formData.problemTitle}></input>
        <br></br>
        <input placeholder="steps taken to solve problem" onChange={(e)=> handleChange("steps", e.target.value)} value={formData.steps}></input>
        <br></br>
        <button onClick={(e)=>{clearForm(e); clearForm();}} disabled={validForm}>Submit</button>
      </section>
    );
}

export default FormPage;