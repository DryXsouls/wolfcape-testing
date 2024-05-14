import React from 'react';
import '../../App.css';
import AboutItem from "../AboutItem";
import '../About.css';

function About(){
    return(
        <div className='about'>
            <div className='about-container'>
                <div className="about-wolfcape-container">
                    <h2 className='about-wolfcape'>About Studio</h2>
                    <hr/>
                    <p className='about-studio'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et erat vitae mauris gravida viverra non id sapien. Sed ut varius mi. Nulla facilisi. Duis suscipit enim eu lorem placerat, ut fringilla neque fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin id rutrum magna. Nulla hendrerit eros vel suscipit dignissim. Duis suscipit porttitor nisi porttitor faucibus. Praesent malesuada nunc eget ex scelerisque, ac bibendum ligula ultricies.</p>
                </div>
                <div className='about-us-container'>
                    <AboutItem
                        src='/Contact.png'
                        name='Matúš Zatykáč'
                        position='Lead Designer'
                        info='Studied in city Žilina at University of Zilina jady jady jada...'
                    />
                    <AboutItem
                        src='/Contact.png'
                        name='David Pavlas'
                        position='Lead Programmer'
                        info='He fun
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et erat vitae mauris gravida viverra non id sapien. Sed ut varius mi. Nulla facilisi. Duis suscipit enim eu lorem placerat, ut fringilla neque fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin id rutrum magna. Nulla hendrerit eros vel suscipit dignissim. Duis suscipit porttitor nisi porttitor faucibus. Praesent malesuada nunc eget ex scelerisque, ac bibendum ligula ultricies.'
                    />
                    <AboutItem
                        src='/Contact.png'
                        name='Richard Baddas'
                        position='Senior Programmer'
                        info='He Beach BOY
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et erat vitae mauris gravida viverra non id sapien. Sed ut varius mi. Nulla facilisi. Duis suscipit enim eu lorem placerat, ut fringilla neque fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin id rutrum magna. Nulla hendrerit eros vel suscipit dignissim. Duis suscipit porttitor nisi porttitor faucibus. Praesent malesuada nunc eget ex scelerisque, ac bibendum ligula ultricies.'
                    />
                    <AboutItem
                        src='/Contact.png'
                        name='Lord Samuel IV'
                        position='Lead Psychologist'
                        info='He cures our mental issues but he also creates them...'/>
                    <AboutItem
                        src='/Contact.png'
                        name='Ardian Crypto'
                        position='Lead Money Thief'
                        info='He Rich   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et erat vitae mauris gravida viverra non id sapien. Sed ut varius mi. Nulla facilisi. Duis suscipit enim eu lorem placerat, ut fringilla neque fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin id rutrum magna. Nulla hendrerit eros vel suscipit dignissim. Duis suscipit porttitor nisi porttitor faucibus. Praesent malesuada nunc eget ex scelerisque, ac bibendum ligula ultricies.'
                    />
                </div>
            </div>
        </div>
    );
}

export default About