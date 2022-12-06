import React from "react";

const Hero = () => {
    return (
        <section className="hero">
                <div className="background-image" style={{backgroundImage: 'url(Assets/img/hero2.jpg)'}} />
                <h1>Het pretpark van Den Haag!</h1>
                <a href="/Tickets" className="btn">Bestel hier uw kaarten!</a>
        </section>
    );
}

export default Hero;