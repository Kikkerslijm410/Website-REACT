import React from "react";

//const Alinea = ({titel, tekst}) => {
const Alinea = (props) => {
    const {titel,tekst} = props

    // below same as above
    // const titel = props.titel;
    // const tekst = props.tekst;

    return (
        <>
        <h3 className="title"> {titel} </h3>
        {/* props is no longer neccecary because of the destructuring */}
        <p> {props.tekst}</p>
        <hr />
        </>
    );
}

export default Alinea;