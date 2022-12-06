import React, { Component } from "react";
import Alinea from "../Shared/Alinea";
import Hero2 from "../Shared/Components/Hero2";


class Plattegrond extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }
    render () {
        return(
            <>
                <Hero2 tekst="Plattegrond"/>

                <section className="contact">
                    <Alinea titel="Dit is een kop" tekst="Dit is een tekst"/>
                </section>
            </>
        );
    }
}

export default Plattegrond;