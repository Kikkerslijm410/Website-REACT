import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/OverOns/OverOns";
import Contact from "./Pages/Contact/Contact";
import Tickets from "./Pages/Tickets/Tickets";
import Plattegrond from "./Pages/Plattegrond/Plattegrond";
import Accesibility from "./Pages/Accesibility/Accesibility";

class Main extends React.Component {
  render() {
    return (
      <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Overons" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Tickets" element={<Tickets />} />
            <Route path="/Plattegrond" element={<Plattegrond />} />
            <Route path="/Accesibility" element={<Accesibility />} />
          </Routes>
      </BrowserRouter>
    );
  }
}

export default Main;