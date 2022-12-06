import React from "react";
import Link from "./Link";

const Footer = () => {         
return (
        <footer>
            <p>Volg ons op:</p>
            <ul>
            <Link icon="fa fa-twitter-square"/>
            <Link icon="fa fa-facebook-square"/>
            <Link icon="fa fa-snapchat-square"/>
            <Link icon="fa fa-youtube-square"/>
            <Link icon="fa-brands fa-square-instagram"/>
            </ul> 
            <p>Made by <a href="https://github.com/Kikkerslijm410" target="_blank">Lucas clavel</a></p>
            <p>Lees hier<a href="/Voorwaarden"> de algemene voorwaarden</a></p>
        </footer>
    );
} 
export default Footer;