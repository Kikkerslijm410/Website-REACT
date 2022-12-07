import React from "react";
import Alinea from "../Shared/Alinea";
import Hero2 from "../Shared/Hero2";
import Winkel from "./Winkel";

const Tickets = () => {
    return (
        <>
            <Hero2 tekst="Tickets"/>
            <Winkel />

            <section className="contact">
                <Alinea titel="Dit is een kop" tekst="Dit is een tekst"/>
            </section>
        </>
    );
}

export default Tickets;