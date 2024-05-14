import React from "react";
import {Link} from "react-router-dom";

function StoryChapter(props){
    return(
        <li className='story-chapter'>
            <Link className="story_link" to={props.path}>
                <p className='chapter-name-text'>{props.name}</p>
                <p className='chapter-date'>{props.date}</p>
            </Link>
        </li>
    );
}
export default StoryChapter
