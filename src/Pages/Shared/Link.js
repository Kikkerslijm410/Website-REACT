import React from "react";

// https://fontawesome.com/icons
const Link = (props) => {
    return (
        <li><a href="#" target="_blank"><i className={props.icon} /></a></li>
    );
}

export default Link;