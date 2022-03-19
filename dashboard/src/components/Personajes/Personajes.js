import React from "react";
import Card from "../Card/Card";
import "./personajes.css"

function Personajes() {

    let personajes = [
        {
            name: 'Ahsoka',
            img: 'ahsoka.jpg'
        },
        {
            name: 'Anakin',
            img: 'anakin.jpg'
        },
        {
            name: 'Batman',
            img: 'batman.jpg'
        },
        {
            name: 'Capitán América',
            img: 'capAmerica.jpg'
        },
        {
            name: 'Hulk',
            img: 'hulkSmall.jpg'
        },
        {
            name: 'Luke',
            img: 'luke.jpg'
        },
        {
            name: 'Yoda',
            img: 'yoda.jpg'
        },
        {
            name: 'Superman',
            img: 'superman.jpg'
        },
        {
            name: 'Dr. Strange',
            img: 'strange.jpg'
        },
        {
            name: 'Vegetta',
            img: 'vegetta.jpg'
        },
        {
            name: 'Obi Wan',
            img: 'obiWan.jpg'
        },
        {
            name: 'Kylo Ren',
            img: 'kyloRen.jpg'
        },
    ]

    return (
    
    <div className="personajes-row">

        <Card personaje={personajes}/>
        
    </div>
    );
};

export default Personajes;