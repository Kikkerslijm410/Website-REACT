import React, { Component } from "react";
import Alinea from "../Shared/Alinea";
import Hero2 from "../Shared/Components/Hero2";


class OverOns extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }
    render () {
        return(
            <>
                <Hero2 tekst="Over ons"/>

                <section className="contact">
                    <Alinea titel="Dit is een kop" tekst="Dit is een tekst"/>
                </section>
            </>
        );
    }
}

export default OverOns;