import React from 'react';
import '../../App.css';
import AboutItem from "../AboutItem";
import '../About.css';
import {useTranslation} from "react-i18next";

function About(){
    const{t}=useTranslation();
    return(
        <div className='about'>
            <div className='about-container'>
                <div className="about-wolfcape-container">
                    <h2 className='about-wolfcape'>{t("aboutStudioHeader")}</h2>
                    <hr/>
                    <p className='about-studio'>{t("aboutStudioParagraph")}</p>
                </div>
                <div className='about-us-container'>
                    <AboutItem
                        src='/Contact.png'
                        name='Matúš Zatykáč'
                        position={t("leadDesigner")}
                        info={t("leadDesignerParagraph")}
                    />
                    <AboutItem
                        src='/Contact.png'
                        name='David Pavlas'
                        position={t("leadProgrammer")}
                        info={t("leadProgrammerParagraph")}
                    />
                    <AboutItem
                        src='/Contact.png'
                        name='Richard Baddas'
                        position={t("seniorProgrammer")}
                        info={t("seniorProgrammerParagraph")}
                    />
                    <AboutItem
                        src='/Contact.png'
                        name='Lord Samuel IV'
                        position={t("leadLevelDesigner")}
                        info={t("leadLevelDesignerParagraph")}
                    />
                    <AboutItem
                        src='/Contact.png'
                        name='Ardian Crypto'
                        position={t("leadEnvironmentArtist")}
                        info={t("leadEnvironmentArtistParagraph")}
                    />
                    <AboutItem
                        src='/Contact.png'
                        name='Timea Pavlas'
                        position={t("leadConceptArtist")}
                        info={t("leadConceptArtistParagraph")}
                    />
                </div>
            </div>
        </div>
    );
}

export default About