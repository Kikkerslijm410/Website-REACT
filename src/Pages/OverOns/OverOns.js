import React, { Component } from "react";
import Alinea from "../Shared/Alinea";
import Hero2 from "../Shared/Hero2";

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
                    <Alinea titel="Over Het Haagse Pretpark" 
                    tekst="Het Haagse Pretpark is opgericht in 2005. Het 
                    park voorzietelk jaar weer miljoenen bezoekers. Om 
                    ervoor ze zorgen dat het park aantrekkelijk blijft 
                    wordt er bij het park continuevernieuwt en uitgebreid."/>

                    <Alinea titel="Geschiedenis" tekst="Het Haagse Pretpark 
                    is opgericht in 2005 en bestond toen nog maar uit een 
                    paar attracties"/>

                    <Alinea titel="Toekomst" tekst="In de toekomst wil Het 
                    Haagse Pretpark nog veel uitbreidingen doen. Zo wil Het 
                    Haagse Pretpark in 2030 een heel nieuw bungelow park bouwen 
                    naast het attractiepark. Doordat er de afgelopen jaren veel 
                    is uitgebreid is het namelijk niet altijd mogelijk om alle 
                    attracties te bezoeken in één dag. Met dit Bungelowpark kunnen
                    bezoekers een nachtje blijven slapen en dus toch alle attracties 
                    bezoeken."/>
                </section>
            </>
        );
    }
}

export default OverOns;