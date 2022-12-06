import React, { Component } from "react";
import Alinea from "../Shared/Alinea";
import Hero2 from "../Shared/Hero2";


class Voorwaarden extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }
    render () {
        return(
            <>
                <Hero2 tekst="Algemene voorwaarden"/>

                <section className="contact">
                    <Alinea titel="Dit is een kop" tekst="Dit is een tekst"/>
                </section>
            </>
        );
    }
}

export default Voorwaarden;