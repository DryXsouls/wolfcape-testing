import React from "react";
import {Link} from "react-router-dom";
import './Footer.css';
function Footer(){
    return(
        <>
            <div className="footer">
                <div className="footer-container">
                    <div className='footer-items'>
                        <div className='footer-items-category'>
                            <h2>Partner Links</h2>
                            <ul className='footer-school-links'>
                                <li className='footer-img-item'>
                                    <Link to='https://feit.uniza.sk/' className='footer-links'>
                                        <img src='/UNIZAlogo.png' alt='Uniza-logo' className='school-link-img'/>
                                    </Link>
                                </li>
                                <li className='footer-img-item'>
                                    <Link to='https://kmikt.uniza.sk/' className='footer-links'>
                                    <img src='/MIKTlogo.png' alt='kmikt-logo' className='school-link-img'/>
                                    </Link>
                                </li>
                                <li className='footer-img-item'>
                                    <Link to='https://feit.uniza.sk/' className='footer-links'>
                                        <img src='/FEITlogo.png' alt='Feit-logo' className='school-link-img'/>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='footer-items-category'>
                            <h2>Social Media</h2>
                            <ul className='footer-social-links'>
                                <li className='footer-item'>
                                    <Link to='https://www.youtube.com/@Cihana2tahy' className='footer-social-link'>
                                        <p className='social-link-name'>Youtube</p>
                                    </Link>
                                </li>
                                <li className='footer-item'>
                                    <Link to='https://www.twitch.tv/dryxsouls' className='footer-social-link'>
                                        <p className='social-link-name'>Twitch</p>
                                    </Link>
                                </li>
                                <li className='footer-item'>
                                    <Link to='https://www.youtube.com/@Cihana2tahy' className='footer-social-link'>
                                        <p className='social-link-name'>Instagram</p>
                                    </Link>
                                </li>
                                <li className='footer-item'>
                                    <Link to='https://discord.gg/tfAmuXrcDX' className='footer-social-link'>
                                        <p className='social-link-name'>Discord</p>
                                    </Link>
                                </li>
                                <li className='footer-item'>
                                    <Link to='https://www.linkedin.com/in/mat%C3%BA%C5%A1-vytyk%C3%A1%C4%8D-03b001212/' className='footer-social-link' >
                                        <p className='social-link-name'>LinkedIn</p>
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