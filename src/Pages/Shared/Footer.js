import React from "react";

const Footer = () => {         
return (
        <footer>
            <p>Volg ons op:</p>
            <ul>
            {/* https://fontawesome.com/icons */}
            <li><a href="#" target="_blank"><i className="fa fa-twitter-square" /></a></li>
            <li><a href="#" target="_blank"><i className="fa fa-facebook-square" /></a></li>
            <li><a href="#" target="_blank"><i className="fa fa-snapchat-square" /></a></li>
            <li><a href="#" target="_blank"><i className="fa fa-youtube-square" /></a></li>
            <li><a href="#" target="_blank"><i className="fa-brands fa-square-instagram" /></a></li>
            </ul> 
            <p>Made by <a href="https://github.com/Kikkerslijm410" target="_blank">Lucas clavel</a></p>
            <p>Lees hier<a href="/Voorwaarden.html"> de algemene voorwaarden</a></p>
        </footer>
    );
} 
export default Footer;