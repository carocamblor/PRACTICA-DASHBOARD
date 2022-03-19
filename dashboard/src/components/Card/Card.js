import React from "react";
import "./card.css"

function Card(props) {
    return (

    props.personaje.map((unPersonaje, idx) =>
    
    <div key={unPersonaje + idx} className="character-card">
        <img src={`/assets/images/${unPersonaje.img}`} alt={unPersonaje.name} />
        <h5>{unPersonaje.name}</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
        <a href="https://github.com/carocamblor">Ver más</a>
    </div>
    
    )
    
    

    );
};

export default Card;