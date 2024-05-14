import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./Header.css"
import videoBg from "./assets/videos/promo.mp4"
function Header(){
    return(
        <div className="header-container">
           <video src={videoBg} autoPlay loop muted playsInline/>
            <h1 className='header-title'>Become main character in our stories</h1>
            <p className='header-sub-title'>Are you ready for adventure?</p>
            <div className="header-btns">
                <Button className="btns"
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                        path='/news'
                >Get Started
                </Button>
                <Button className="btns"
                        buttonStyle='btn--primary'
                        buttonSize='btn--large'
                        path='/gallery'
                >WATCH TRAILER <i className='far fa-play-circle'/>
                </Button>
            </div>
        </div>
        );


}
export default Header;