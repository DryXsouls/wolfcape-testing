import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./Header.css"
import videoBg from "./assets/videos/promo.mp4"
import {useTranslation} from "react-i18next";
function Header(){
    const{t}=useTranslation();
    return(
        <div className="header-container">
           <video src={videoBg} autoPlay loop muted playsInline/>
            <h1 className='header-title'>{t("heroHeader")}</h1>
            <p className='header-sub-title'>{t("heroParagraph")}</p>
            <div className="header-btns">
                <Button className="btns"
                        buttonStyle='btn--outline'
                        buttonSize='btn--large'
                        path='/news'
                >{t("heroGetStarted")}
                </Button>
                <Button className="btns"
                        buttonStyle='btn--primary'
                        buttonSize='btn--large'
                        path='/gallery'
                >{t("heroWatchTrailer")} <i className='far fa-play-circle'/>
                </Button>
            </div>
        </div>
        );


}
export default Header;