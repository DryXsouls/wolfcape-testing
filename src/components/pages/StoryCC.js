import React, { useState, useEffect, useCallback } from "react";
import GalleryItem from "../GalleryItem";
import '../Story.css';
import {Link} from "react-router-dom";
function StoryCC(){
    const [slideIndex, setSlideIndex] = useState(1);

    const showSlides = useCallback((n) => {
        let slides = document.getElementsByClassName("gallery-item");
        let dots = document.getElementsByClassName("gallery-dot");
        if (slides.length === 0 || dots.length === 0) {
            // Elements not found, return or handle accordingly
            return;
        }
        if (n > slides.length) {
            setSlideIndex(1);
            return; // Reset to first slide
        }
        if (n < 1) {
            setSlideIndex(slides.length);
            return; // Go to last slide
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }, [slideIndex]);

    useEffect(() => {
        showSlides(slideIndex);

        return () => {
            // Cleanup function if needed
        };
    }, [slideIndex, showSlides]);

    function plusSlides(n) {
        setSlideIndex(slideIndex + n);
    }

    function currentSlide(n) {
        setSlideIndex(n);
    }

    return(
        <div className='story'>
            <div className='story-container'>
                <div className='story-info'>
                    <div className='story-info-left'>
                        <img className='story-info-left-img' src='/CrashedCivilization.png' alt='story-img'/>
                    </div>
                    <hr color='#79654C'/>
                    <div className='story-info-right'>
                        <h2 className='story-info-r-title'>Ark-Crashed Civilization</h2>
                        <div className='story-info-r-details'><h5>Author:</h5><p>Matúš Vytykáč</p></div>
                        <div className='story-info-r-details'><h5>Genres:</h5><p>Fantasy - Medieval - Action - Sci-fi - War</p></div>
                        <div className='story-info-r-details'><h5>Updated:</h5><p>30:12:2025</p></div>
                        <hr/>
                        <div className='story-info-r-details'><h5>Description:</h5></div>
                        <div className='story-info-r-details'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin sapien elit, quis pulvinar sem pellentesque a. Nam vitae lorem odio. Nulla eget congue odio, a convallis tortor. Phasellus ac sagittis dolor, ut ornare elit. Vestibulum non lacus et ligula accumsan venenatis. Quisque vel porttitor odio, quis dapibus metus. Quisque mattis vulputate justo vitae rhoncus. Cras congue quis mauris non scelerisque. Nulla fermentum ante quis purus tincidunt semper.</p></div>
                    </div>
                </div>
                <hr/>


                <div className='story-gallery-container'>
                    <GalleryItem
                        src='/CrashedCivilization.png'
                        name='Crashed Civilization'
                    />
                    <GalleryItem
                    src='/cc2.jpg'
                    name='Crashed Civilization warrior'
                    />
                    <GalleryItem
                        src='/WolfCape-3D.png'
                        name='Logo Wallpaper'
                    />
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="next" onClick={() => plusSlides(1)}>>&#10095;</a>
                </div>
                <div className='gallery-dots'>
                    <span className="gallery-dot" onClick={() => currentSlide(1)}></span>
                    <span className="gallery-dot" onClick={() => currentSlide(2)}></span>
                    <span className="gallery-dot" onClick={() => currentSlide(3)}></span>
                </div>

                <li className="story-steam-wrap">
                    <Link className="story-steam-link" to='/'>
                        <figure className="story-steam-img_wrap">
                            <img src='/CrashedCivilization.png' alt="Steam img" className='story-steam-img'/>
                        </figure>
                    </Link>
                    <div className='story-steam-info'>
                        <h2 className='story-steam-title'>Steam Link</h2>
                        <p className='story-steam-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non ex mi. Maecenas in viverra lacus. Integer nec odio eget turpis dapibus dictum eu sed nulla. Nulla vulputate convallis viverra. Nam nibh odio, vestibulum et faucibus et, vulputate vel leo. Nulla porttitor id ante congue dictum. </p>
                    </div>
                </li>
            </div>
        </div>
    );
}


export default StoryCC;