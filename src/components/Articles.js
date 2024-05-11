import React from "react";
import ArticleItem from "./ArticleItem";
import './Articles.css'

function Articles(){

    return(
        <div className='articles'>
            <h1>Check out new updates on Last Tale Spun</h1>
            <div className='articles__container'>
                <div className="articles__wrapper">
                    <ul className="articles__items">
                        <ArticleItem
                            src="Behind the scenes.png"
                            text="Explore the Last Tale Spun behind the scenes"
                            label="LastTaleSpun"
                            path='/news'
                        />
                        <ArticleItem
                            src="Wolfie.png"
                            text="Read through our game stories"
                            label="Stories"
                            path='/tales'
                        />
                        <ArticleItem
                            src="Art Book.png"
                            text="Check our Art book"
                            label="Gallery"
                            path='/gallery'
                        />
                        <ArticleItem
                            src="Contact.png"
                            text="Contact our wolfs under cape here"
                            label="Contact"
                            path='/contact'
                        />
                        <ArticleItem
                            src="Steam.png"
                            text="Check Last Tale Spun on Steam"
                            label="LastTaleSpun"
                            path='/contact'
                        />
                    </ul>
                </div>

            </div>

        </div>
    );
}
export default Articles;