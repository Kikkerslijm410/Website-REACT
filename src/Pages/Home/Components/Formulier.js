import React from "react";
import { useState } from "react";

const Formulier = (props) => {
    const [formData, setFormData] = useState();

    //e staat voor event
    const handleChange = (e) => {
        setFormData(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(formData);
    }

    return (
        <form>
            <input type="email" placeholder={props.tekst} onChange={handleChange}/>
            <button className="btn" onClick={handleSubmit}> {props.tekst2} </button>
        </form>
    );
}

export default Formulier;