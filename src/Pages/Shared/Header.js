import React from "react";

const Header = () => {         
return (
        <header>
            <h3>&nbsp; <i className="fa fa-ghost" /> Het Haagse Pretpark</h3>
            <nav>
            <li><a href="/">Home</a></li>
            <li><a href="/Tickets">Tickets</a></li>
            <li><a href="/Plattegrond">Plattegrond</a></li>
            <li><a href="/OverOns">Over ons</a></li>
            <li><a href="/Contact">Contact</a></li>
            <li><a href="/Accesibility"><i className="fa fa-wheelchair" /></a></li>
            </nav>
        </header>
    );
} 
export default Header;