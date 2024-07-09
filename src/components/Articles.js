import React from "react";
import ArticleItem from "./ArticleItem";
import './Articles.css';
import {useTranslation} from "react-i18next";

function Articles(){
    const{t}=useTranslation();
    return(
        <div className='articles'>
            <div className='articles__container'>
                <div className="articles__wrapper">
                    <ul className="articles__items">
                        <ArticleItem
                            src="Art Book.png"
                            text={t("homeAbout")}
                            label={t("homeAboutLabel")}
                            path='/About'
                        />
                        <ArticleItem
                            src="Behind the scenes.png"
                            text={t("homeNews")}
                            label={t("homeNewsLabel")}
                            path='/news'
                        />
                        <ArticleItem
                            src="Wolfie.png"
                            text={t("homeTales")}
                            label={t("homeTalesLabel")}
                            path='/tales'
                        />
                        <ArticleItem
                            src="Contact.png"
                            text={t("homeContact")}
                            label={t("homeContactLabel")}
                            path='/contact'
                        />
                        <ArticleItem
                            src="Steam.png"
                            text={t("homeSteam")}
                            label={t("homeSteamLabel")}
                            path='/contact'
                        />
                    </ul>
                </div>

            </div>

        </div>
    );
}
export default Articles;