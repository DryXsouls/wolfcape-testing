import React from 'react';

function AboutItem(props){
    return(
        <div className='about-item'>
            <figure className='about-photo-wrap'>
                <img src={props.src} alt='member-profile' className='about-photo'/>
            </figure>
            <div className='about-profile'>
                <h2 className='about-name'>{props.name}</h2>
                <h4 className='about-position'>{props.position}</h4>
                <hr/>
                <p className='about-info'>{props.info}</p>
            </div>
        </div>
    );
}
export default AboutItem;