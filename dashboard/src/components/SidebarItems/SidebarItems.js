import React from "react";

function SidebarItems(props) {
    return (

    <li className="nav-item">
        <a className="nav-link" href="/">
            <i className={props.data.icon}></i>
            <span>{props.data.title}</span>
        </a>
    </li>
    
    );
};

export default SidebarItems;