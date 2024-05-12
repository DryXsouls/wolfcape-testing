import React from 'react';
import '../../App.css';
import { ReactComponent as WolfCapeLogo } from '../TypeFace-WolfCape.svg';
import '../Contact.css';
import Map from "../Map";

function Contact(){
    return(
        <div className='contacts'>
            <div className='contacts-container'>
                <div className='contacts-details'>
                    <WolfCapeLogo color="#79654C" fill="#79654C" stroke="current" className="contacts-logo-img" alt="WolfCape Logo"/>
                    <h2>Contact</h2>
                    <div className='contacts-detail'>
                        <h3 className='detail-title'>Address</h3>
                        <hr/>
                        <p>Wolfcape Studios s.r.o</p>
                        <p>River Park</p>
                        <p>Dvořákovo nábrežie 10</p>
                        <p>841 02 Bratislava</p>
                    </div>
                    <div className='contacts-detail'>
                        <h3 className='detail-title'>Contact</h3>
                        <hr/>
                        <p>E-mail: info@wolfcapestudios.sk</p>
                        <p>Phone: +421 xxx xxx xxx</p>
                    </div>
                </div>
                <div className='contacts-images'>
                    <img src="/CrashedCivilization.png"  alt='contact-image1' className='contacts-image-1'/>
                    <img src="/Art Book.png" alt='contact-image2' className='contacts-image-2'/>
                    <img src="/Steam.png" alt='contact-image3' className='contacts-image-3'/>
                    <img src="/panda.jpg" alt='contact-image3' className='contacts-image-4'/>
                    <img src="/Contact.png" alt='contact-image3' className='contacts-image-5'/>
                </div>
                <div className='contacts-map-wrap'>
                    <Map/>
                </div>
            </div>
        </div>
    );
}

export default Contact;