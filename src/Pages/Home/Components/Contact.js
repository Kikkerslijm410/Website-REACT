import React from "react";
import Alinea from "../../Shared/Alinea";
import Formulier from "./Formulier";

const Contact = () => {
    return (
        <section className="contact">
            <Alinea titel="Halloween" tekst="Dit is een tekst"/>

            <Alinea titel="Actueel nieuws" tekst="Dit is een tekst"/>

            <Alinea titel="Nieuwsbrief" 
            tekst="Wilt u wekelijks op de hoogte blijven van nieuwe aanbiedingen,
            leuke acties of nieuwe attracties. Meldt u dan nu aan voor onze
            nieuwsbrief en blijf op de hoogte van de laatste nieuwtjes" 
            />

           <Formulier tekst="Email" tekst2="Aanmelden"/>
        </section> 
    );
}

export default Contact;
