import React from "react";
import {Link} from "react-router-dom";

function StoryItem(props){
    return(
        <div className='story-item'>
            <Link to={props.path} className='story-item-link'>
                <img src={props.src} alt='game-cover' className='story-item-img'/>
            </Link>
                <div className='story-item-details'>
                    <h3 className='story-title'>{props.title}</h3>
                    <h4 className='story-tags'>{props.tags}</h4>
                    <hr/>
                    <p className='story-description'>{props.description}</p>
                </div>
        </div>
    );

}
export default StoryItem