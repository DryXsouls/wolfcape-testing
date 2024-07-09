import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import "./Navbar.css";
import { Link } from 'react-router-dom';
import { ReactComponent as WolfCapeLogo } from './TypeFace-WolfCape.svg';
import LanguageSelector from "./LanguageSelector";
import {useTranslation} from "react-i18next";


function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [languageOpen, setLanguageOpen] = useState(false);
    const handleClick = () => setClick(!click);
    const{t}=useTranslation();

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(true);
        } else {
            setButton(false);
        }
    };
    const closeMenus = () => {
        setClick(false);
        setLanguageOpen(false);
    }


    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMenus}>
                        <WolfCapeLogo color="white" fill="white" stroke="current" className="navbar-logo-img" alt="WolfCape Logo"/>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fa-solid fa-times' : 'fa-solid fa-bars'}/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMenus}>
                                {t("navAbout")}
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/news' className='nav-links' onClick={closeMenus}>
                                {t("navNews")}
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/tales' className='nav-links' onClick={closeMenus}>
                                {t("navTales")}
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/contact' className='nav-links' onClick={closeMenus}>
                                {t("navContact")}
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/Profile' className='nav-links-mobile' onClick={closeMenus}>
                                <button className="far fa-user-circle w-16 h-16 border-none bg-none hover:bg-transparent hover:text-black"></button>
                            </Link>
                        </li>
                    </ul>
                    <div className="flex gap-5">
                        <LanguageSelector/>
                        <Link to='/Profile'>
                            <button
                                className="far fa-user-circle w-16 h-16 border-none bg-none hover:bg-transparent hover:text-wolfcape-brown"
                                onClick={closeMenus}
                            ></button>
                        </Link>

                    </div>

                </div>
            </nav>
        </>
    );
}

export default Navbar;