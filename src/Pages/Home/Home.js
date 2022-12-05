import React, { Component } from "react";
import Contact from "./Components/Contact";
import Hero from "./Components/Hero";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }
    render () {
        return(
            <>
                <Hero />
                <Contact />
            </>
        );
    }
}

export default Home;
