import React from "react";

const Header = () => {         
return (
        <header>
            <h3>&nbsp; <i className="fa fa-ghost" /> Het Haagse Pretpark</h3>
            <nav>
            <li><a>Home</a></li>
            <li><a href="/Tickets.html">Tickets</a></li>
            <li><a href="/Plattegrond.html">Plattegrond</a></li>
            <li><a href="/About.html">Over ons</a></li>
            <li><a href="/Contact.html">Contact</a></li>
            <li><a href="/Accesibility.html"><i className="fa fa-wheelchair" /></a></li>
            </nav>
        </header>
    );
} 
export default Header;