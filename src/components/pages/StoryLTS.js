import React, {useState, useEffect, useCallback} from "react";
import StoryChapter from "../StoryChapter";
import GalleryItem from "../GalleryItem";
import '../Story.css';
function StoryLTS(){
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
                        <img className='story-info-left-img' src='/Steam.png' alt='story-img'/>
                    </div>
                    <hr color='#79654C'/>
                    <div className='story-info-right'>
                        <h2 className='story-info-r-title'>Last Tale Spun</h2>
                        <div className='story-info-r-details'><h5>Author:</h5><p>Matúš Vytykáč</p></div>
                        <div className='story-info-r-details'><h5>Genres:</h5><p>Fantasy - Medieval - Action</p></div>
                        <div className='story-info-r-details'><h5>Updated:</h5><p>30:11:2024</p></div>
                        <hr/>
                        <div className='story-info-r-details'><h5>Description:</h5></div>
                        <div className='story-info-r-details'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin sapien elit, quis pulvinar sem pellentesque a. Nam vitae lorem odio. Nulla eget congue odio, a convallis tortor. Phasellus ac sagittis dolor, ut ornare elit. Vestibulum non lacus et ligula accumsan venenatis. Quisque vel porttitor odio, quis dapibus metus. Quisque mattis vulputate justo vitae rhoncus. Cras congue quis mauris non scelerisque. Nulla fermentum ante quis purus tincidunt semper.</p></div>
                    </div>
                </div>
                <hr/>


                <div className='story-gallery-container'>
                    <GalleryItem
                        src='/Steam.png'
                        name='Man best friend'
                    />
                    <GalleryItem
                        src='/WolfCape-3D.png'
                        name='Logo Wallpaper'
                    />
                    <GalleryItem
                        src='/Wolfie.png'
                        name='Wolfie on Run'
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


                <div className='story-chapters-wrap'>
                    <div className='story-chapter-basic-info'>
                        <p className='story-chapter-name'>Chapter name</p>
                        <p className='story-chapter-date'>Date</p>
                    </div>
                    <ul className='story-chapters-list'>
                        <StoryChapter
                            path='/chapter4'
                            name='Chapter-4'
                            date='30.11.2024'
                        />
                        <StoryChapter
                            path='/chapter3'
                            name='Chapter-3'
                            date='30.10.2024'
                        />
                        <StoryChapter
                            path='/chapter2'
                            name='Chapter-2'
                            date='30.9.2024'
                        />

                        <StoryChapter
                            path='/chapter1'
                            name='Chapter-1'
                            date='30.8.2024'
                        />
                        <StoryChapter
                            path='/chapter1'
                            name='Chapter-1'
                            date='30.8.2024'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}


export default StoryLTS;