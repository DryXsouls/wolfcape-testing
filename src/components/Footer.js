import React from "react";
import {Link} from "react-router-dom";
import './Footer.css';
function Footer(){
    return(
        <>
            <div className="footer">
                <div className="footer-container">
                    <img src='/logo192.png' alt='footer'/>
                    <div className='footer-items'>
                        <div className='footer-items-category'>
                            <h2>School links</h2>
                            <ul className='footer-school-links'>
                                <li className='footer-img-item'>
                                    <Link to='https://feit.uniza.sk/' className='footer-links'>
                                        <img src='/logo512.png' alt='feit logo' className='school-link-img'/>
                                    </Link>
                                </li>
                                <li className='footer-img-item'>
                                    <Link to='https://kmikt.uniza.sk/' className='footer-links'>
                                    <img src='../components/assets/images/WolfCape3D.png' alt='kmikt logo' className='school-link-img'/>
                                    </Link>
                                </li>
                                <li className='footer-img-item'>
                                    <Link to='https://feit.uniza.sk/' className='footer-links'>
                                        <img src='/logo512.png' alt='feit logo' className='school-link-img'/>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='footer-items-category'>
                            <h2>Social Media</h2>
                            <ul className='footer-social-links'>
                                <li className='footer-item'>
                                    <Link to='https://www.youtube.com/@Cihana2tahy'>
                                        <i></i>
                                        <p>Youtube</p>
                                    </Link>
                                </li>
                                <li className='footer-item'>
                                    <Link to='https://www.twitch.tv/dryxsouls'>
                                        <i></i>
                                        <p>Twitch</p>
                                    </Link>
                                </li>
                                <li className='footer-item'>
                                    <Link to='https://www.youtube.com/@Cihana2tahy'>
                                        <i></i>
                                        <p>Instagram</p>
                                    </Link>
                                </li>
                                <li className='footer-item'>
                                    <Link to='https://discord.gg/tfAmuXrcDX'>
                                        <i></i>
                                        <p>Discord</p>
                                    </Link>
                                </li>
                                <li className='footer-item'>
                                    <Link to='https://www.linkedin.com/in/mat%C3%BA%C5%A1-vytyk%C3%A1%C4%8D-03b001212/'>
                                        <i></i>
                                        <p>LinkedIn</p>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer