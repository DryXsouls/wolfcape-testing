import react, {useState} from "react";
import {useTranslation} from "react-i18next";
import React from "react";

const languages = [
    {code:"en", lang:"English"},
    {code:"sk", lang:"Slovak"},
];

const LanguageSelector = () => {
    const {i18n} = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setLanguageOpen(false);
    };
    const [languageOpen, setLanguageOpen] = useState(false);



    return(
        <div className="relative w-full h-full flex flex-col items-center rounded-lg w-62">
            <button
                className={languageOpen ? 'fas fa-globe w-16 h-16 border-none bg-wolfcape-brown hover:bg-transparent hover:text-wolfcape-brown active:text-wolfcape-brown' : 'fas fa-globe w-16 h-16 border-none bg-none hover:bg-transparent hover:text-wolfcape-brown active:text-wolfcape-brown'}
                onClick={() => setLanguageOpen((prev) => !prev)}
            />
            {languageOpen && (
                <ul className="flex flex-col items-start bg-zinc-900 absolute top-20 p-2 rounded-lg gap-3">
                    {languages.map((lng) => (
                        <button
                            className={lng.code === i18n.language ? 'selected w-full p-2 bg-wolfcape-brown cursor-pointer border-none rounded-md font-bold hover:text-white' : 'w-full p-2 font-bold hover:text-white hover:bg-wolfcape-brown border-none cursor-pointer rounded-md'}
                            key={lng.code}
                            onClick={() => changeLanguage(lng.code)}
                        >
                            {lng.lang}
                        </button>
                    ))}
                </ul>
            )}
        </div>
    );
}
export default LanguageSelector