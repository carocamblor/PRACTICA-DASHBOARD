import React from "react";

function SidebarItems(props) {
    return (

    props.item.map((unItem, idx) =>

    <li className="nav-item" key={unItem + idx}>
        <a className="nav-link" href="/">
            <i className={unItem.icon}></i>
            <span>{unItem.title}</span>
        </a>
    </li>
    
    )
    
    
    );
};

export default SidebarItems;