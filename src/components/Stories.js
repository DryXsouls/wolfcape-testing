import React from "react";
import StoryItem from "./StoryItem";
import './Stories.css';
import {useTranslation} from "react-i18next";

function Stories(){
    const{t} = useTranslation();
    return(
        <div className='stories'>
            <h1 className='stories-headline'>{t("talesHeader")} </h1>
            <div className='stories-container'>
                <StoryItem
                    path='/lts'
                    src='Steam.png'
                    title='Last Tale Spun'
                    tags={t("lastTaleSpunTags")}
                    description={t("lastTaleSpunParagraph")}
                />
                <StoryItem
                    path='/cc'
                    src='CrashedCivilization.png'
                    title='Crashed Civilization'
                    tags={t("crashedCivilizationTags")}
                    description={t("crashedCivilizationParagraph")}
                />
            </div>
        </div>
    );
}


export default Stories;