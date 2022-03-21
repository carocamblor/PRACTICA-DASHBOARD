import React from "react";
import Card from "../Card/Card";
import "./personajes.css"

function Personajes() {

    let personajes = [
        {
            name: 'Ahsoka',
            img: 'ahsoka.jpg',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?'
        },
        {
            name: 'Anakin',
            img: 'anakin.jpg',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?'
        },
        {
            name: 'Batman',
            img: 'batman.jpg',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?'
        },
        {
            name: 'Hulk',
            img: 'hulkSmall.jpg',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?'
        },
        {
            name: 'Luke',
            img: 'luke.jpg',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?'
        },
        {
            name: 'Yoda',
            img: 'yoda.jpg',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?'
        },
        {
            name: 'Obi Wan',
            img: 'obiWan.jpg',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?'
        },
        {
            name: 'Kylo Ren',
            img: 'kyloRen.jpg',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?'
        },
        {
            name: 'Capitán América',
            img: 'capAmerica.jpg',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?'
        },
        {
            name: 'Vegetta',
            img: 'vegetta.jpg',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?'
        },
        {
            name: 'Superman',
            img: 'superman.jpg',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?'
        },
        {
            name: 'Dr. Strange',
            img: 'strange.jpg',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?'
        },
    ]

    return (
    
    <div className="personajes-row">

        {personajes.map((personaje, idx) => <Card key={personaje.name + idx} data={personaje}/>)}
        
    </div>
    );
};

export default Personajes;