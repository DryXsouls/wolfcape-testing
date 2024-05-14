import React from "react";

function GalleryItem(props){
    return(
        <div className='gallery-item'>
            <img className='gallery-item-img' src={props.src} alt='gallery-img'/>
            <div className='gallery-item-name'>{props.name}</div>
        </div>
    );
}
export default GalleryItem;