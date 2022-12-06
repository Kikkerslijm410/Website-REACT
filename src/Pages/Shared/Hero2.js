import React from "react";

const Hero2 = (props) => {
    const tekst = props.tekst;
    return (
        <section className="hero2">
                <div className="background-image" style={{backgroundImage: 'url(Assets/img/hero3.jpg)'}} />
                <h1>{tekst}</h1>
        </section>
    );
}

export default Hero2;