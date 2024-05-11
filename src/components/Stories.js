import React from "react";
import StoryItem from "./Story-item";
import './Stories.css';

function Stories(){
    return(
        <div className='stories'>
            <h1 className='stories-headline'>Our Titles </h1>
            <div className='stories-container'>
                <StoryItem
                    path='/lls'
                    src='Steam.png'
                    title='Last Tale Spun'
                    tags='Fantasy Co-Op'
                    description='Story about retired soldier and his wolf friend on adventure to save his sister-in law and niece from slave-merchants'
                />
                <StoryItem
                    path='/cc'
                    src='CrashedCivilization.png'
                    title='Crashed Civilization'
                    tags='Fantasy Sci-fi Real-time Strategy'
                    description='Story about Humans from universe where they were brought to extinction, jumping dimensions in their space ship to a fantasy world
                     full of elves, orcs, beast-men and their main enemy insect-demons'
                />
            </div>
        </div>
    );
}


export default Stories;