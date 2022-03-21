import React from "react";
import "./card.css"

function Card(props) {
    return (
    
    <div className="character-card">
        <img src={`/assets/images/${props.data.img}`} alt={props.data.name} />
        <h5>{props.data.name}</h5>
        <p>{props.data.description}</p>
        <a href={`https://www.google.com/search?q=${props.data.name}`}>Ver más</a>
    </div>

    );
};

export default Card;