import StoryChapter from "./StoryChapter";
import React from "react";
import './Chapters.css';
function Chapters(){
    return(
        <div className='story-chapters-wrap'>
            <div className='story-chapter-basic-info'>
                <p className='story-chapter-name'>Chapter name</p>
                <p className='story-chapter-date'>Date</p>
            </div>
            <ul className='story-chapters-list'>
                <StoryChapter
                    path='/chapter4'
                    name='Chapter-4'
                    date='30.11.2025'
                />
                <StoryChapter
                    path='/chapter3'
                    name='Chapter-3'
                    date='30.10.2025'
                />
                <StoryChapter
                    path='/chapter2'
                    name='Chapter-2'
                    date='30.9.2025'
                />
                <StoryChapter
                    path='/chapter1'
                    name='Chapter-1'
                    date='30.8.2025'
                />
            </ul>
        </div>
    );
}

export default Chapters;
