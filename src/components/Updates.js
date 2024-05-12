import React from 'react';
import UpdateItem from "./UpdateItem";
import './Updates.css'
function Updates(){
    return(
        <div className='updates'>
            <div className='updates-container'>
                <div className='updates-items'>
                    <UpdateItem
                        src='CrashedCivilization.png'
                        title='Crashed Civilization tale'
                        number='#4'
                        description='Every month new Chapter'
                        details='Read first chapter of Crashed Civilization with us, Story about demise of human race in our universe but the new begging in universe where no human
                         existed before. Will they survive?'
                        date='23.8.2024'
                    ></UpdateItem>
                    <UpdateItem
                        src='Steam.png'
                        title='Last Tale Spoken update'
                        number='#3'
                        description='version 0.0.2 available on Patreon'
                        details='Added tutorial level, new animations, small games to play with your friend in first level'
                        date='23.7.2024'
                    ></UpdateItem>
                    <UpdateItem
                        src='Steam.png'
                        title='Last Tale Spoken on Patreon'
                        number='#2'
                        description='version 0.0.1 available on Patreon'
                        details='Option to roam first level map, looking for secrets and Puppies altar with your names new animation and models for main characters improved environment'
                        date='23.6.2024'
                    ></UpdateItem>
                    <UpdateItem
                        src='WolfCape-3D.png'
                        title='WolfCape on Patreon'
                        number='#1'
                        description='From now on you can reach us on patreon'
                        details='We decided to reach more people with new social media Patreon where you will get updates and if you decide to support us you can play our alpha version of the game Last Tale Spoken'
                        date='12.5.2024'
                    ></UpdateItem>
                </div>
            </div>
        </div>
    );
}

export default Updates;