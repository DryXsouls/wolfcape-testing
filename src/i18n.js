import i18n from 'i18next';
import LanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from 'react-i18next';


i18n.use(LanguageDetector).use(initReactI18next).init({
    debug:true,
    fallbackLng: "en",
    returnObjects:true,
    resources:{
        en:{
            translation:{
                navAbout:"About us",
                navNews:"News",
                navTales:"Tales",
                navContact:"Contact",
                navEn: "English",
                navSk: "Slovak",
                heroHeader: "Become main character in our stories",
                heroParagraph: "Are you ready for adventure?",
                heroGetStarted: "Get Started",
                heroWatchTrailer: "WATCH TRAILER",
                homeAbout: "We are WolfCape get to know us",
                homeAboutLabel: "About",
                homeNews: "Explore the Last Tale Spun behind the scenes",
                homeNewsLabel: "News",
                homeTales: "Read through our game stories",
                homeTalesLabel: "Tales",
                homeContact: "Contact our wolfs under cape here",
                homeContactLabel: "Contact",
                homeSteam: "Check Last Tale Spun on Steam",
                homeSteamLabel: "LastTaleSpun",
                aboutStudioHeader: "About Studio",
                aboutStudioParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et erat vitae mauris gravida viverra non id sapien. Sed ut varius mi. Nulla facilisi. Duis suscipit enim eu lorem placerat, ut fringilla neque fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin id rutrum magna. Nulla hendrerit eros vel suscipit dignissim. Duis suscipit porttitor nisi porttitor faucibus. Praesent malesuada nunc eget ex scelerisque, ac bibendum ligula ultricies.",
                leadDesigner: "Lead Designer",
                leadDesignerParagraph: "Studied in city Žilina at University of Žilina,",
                leadProgrammer: "Lead Programmer",
                leadProgrammerParagraph: "Studied in city Žilina at University of Žilina,",
                seniorProgrammer: "Senior Programmer",
                seniorProgrammerParagraph: "Studied in city Žilina at University of Žilina,",
                leadLevelDesigner: "Lead Level Designer",
                leadLevelDesignerParagraph: "Studied in city Praha at University of Praha,",
                leadEnvironmentArtist: "Lead Environment Artist",
                leadEnvironmentArtistParagraph: "Studied in city Košice at University of Košice,",
                leadConceptArtist: "Lead Concept Artist",
                leadConceptArtistParagraph: "Studied in city Košice at University of Košice,",
                talesHeader: "Our Tales",
                lastTaleSpunTags: "Fantasy Co-Op",
                lastTaleSpunParagraph: "Story about retired soldier and his wolf friend on adventure to save his sister-in law and niece from slave-merchants.",
                crashedCivilizationTags: "Fantasy Sci-fi Real-time Strategy",
                crashedCivilizationParagraph: "Story about Humans from universe where they were brought to extinction, jumping dimensions in their space ship to a fantasy world full of elves, orcs, beast-men and their main enemy insect-demons.",
                taleAuthorHeader: "Author:",
                taleGenreHeader: "Genres:",
                taleLTSGenres:"Fantasy - Medieval - Action",
                taleCCGenres:"Fantasy - Medieval - Action - Sci-fi - War",
                taleUpdateHeader: "Updated:",
                taleDescriptionHeader: "Description:",
                taleDescriptionLTSParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin sapien elit, quis pulvinar sem pellentesque a. Nam vitae lorem odio. Nulla eget congue odio, a convallis tortor. Phasellus ac sagittis dolor, ut ornare elit. Vestibulum non lacus et ligula accumsan venenatis. Quisque vel porttitor odio, quis dapibus metus. Quisque mattis vulputate justo vitae rhoncus. Cras congue quis mauris non scelerisque. Nulla fermentum ante quis purus tincidunt semper.",
                taleDescriptionCCParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin sapien elit, quis pulvinar sem pellentesque a. Nam vitae lorem odio. Nulla eget congue odio, a convallis tortor. Phasellus ac sagittis dolor, ut ornare elit. Vestibulum non lacus et ligula accumsan venenatis. Quisque vel porttitor odio, quis dapibus metus. Quisque mattis vulputate justo vitae rhoncus. Cras congue quis mauris non scelerisque. Nulla fermentum ante quis purus tincidunt semper.",
                taleSteamHeader: "Steam Link",
                taleSteamLTSParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non ex mi. Maecenas in viverra lacus. Integer nec odio eget turpis dapibus dictum eu sed nulla. Nulla vulputate convallis viverra. Nam nibh odio, vestibulum et faucibus et, vulputate vel leo. Nulla porttitor id ante congue dictum.",
                taleSteamCCParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non ex mi. Maecenas in viverra lacus. Integer nec odio eget turpis dapibus dictum eu sed nulla. Nulla vulputate convallis viverra. Nam nibh odio, vestibulum et faucibus et, vulputate vel leo. Nulla porttitor id ante congue dictum.",
                contactHeader: "Contact",
                contactAddress: "Address",
                contactPhone: "Phone",
                contactFormEmail: "Your E-mail",
                contactFormSubject: "Your Subject",
                contactFormMessage: "Your message",
                contactFormSend: "SEND",
                profileUsername: "Username",
                profileUsernameParagraph: "This is your username that will be shown to others in the comment section and games",
                profileEmail: "Email",
                profileEmailParagraph: "This information is private and will not be shared with others.",
                profilePassword: "Password",
                profilePasswordParagraph: "We recommend that you periodically update your password to help prevent unauthorized access to your account.",
                profileCurrentPassword: "Current Password",
                profileNewPassword: "New Password",
                profileVerifyNewPassword: "Verify New Password",
                profileLogOut: "Log Out",
                profileLogOutParagraph: "Have a nice day",
                profileCancel: "CANCEL",
                profileSave: "SAVE CHANGES",

            }
        },
        sk:{
            translation:{
                navAbout:"O nás",
                navNews:"Novinky",
                navTales:"Príbehy",
                navContact:"Kontakt",
                navEn: "Angličtina",
                navSk: "Slovenčina",
                heroHeader: "Staň sa hlavnou postavou v naších príbehoch",
                heroParagraph: "Si pripravený na dobrodružstvo?",
                heroGetStarted: "Začnite",
                heroWatchTrailer: "POZRIEŤ TRAILER",
                homeAbout: "My sme WolfCape spoznajte nás",
                homeAboutLabel: "O nás",
                homeNews: "Preskúmajte Last Tale Spun v zákulisií",
                homeNewsLabel: "Novinky",
                homeTales: "Prečítajte si naše herné príbehy",
                homeTalesLabel: "Príbehy",
                homeContact: "Kontaktuje našich vlkou pod kapucňou",
                homeContactLabel: "Kontakt",
                homeSteam: "Pozrite si Last Tale Spun na Steame",
                homeSteamLabel: "LastTaleSpun",
                aboutStudioHeader: "O Štúdiu",
                aboutStudioParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et erat vitae mauris gravida viverra non id sapien. Sed ut varius mi. Nulla facilisi. Duis suscipit enim eu lorem placerat, ut fringilla neque fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin id rutrum magna. Nulla hendrerit eros vel suscipit dignissim. Duis suscipit porttitor nisi porttitor faucibus. Praesent malesuada nunc eget ex scelerisque, ac bibendum ligula ultricies.",
                leadDesigner: "Lead Designer",
                leadDesignerParagraph: "Studied in city Žilina at University of Žilina,",
                leadProgrammer: "Lead Programmer",
                leadProgrammerParagraph: "Studied in city Žilina at University of Žilina,",
                seniorProgrammer: "Senior Programmer",
                seniorProgrammerParagraph: "Studied in city Žilina at University of Žilina,",
                leadLevelDesigner: "Lead Level Designer",
                leadLevelDesignerParagraph: "Studied in city Praha at University of Praha,",
                leadEnvironmentArtist: "Lead Environment Artist",
                leadEnvironmentArtistParagraph: "Studied in city Košice at University of Košice,",
                leadConceptArtist: "Lead Concept Artist",
                leadConceptArtistParagraph: "Studied in city Košice at University of Košice,",
                talesHeader: "Naše Príbehy",
                lastTaleSpunTags: "Fantázia Co-Op",
                lastTaleSpunParagraph: "Príbeh o vojakovi na dôchodku a jeho priateľovi vlkovi na dobrodružstve, aby zachránili svoju švagrinú a neter pred obchodníkmi s otrokmi",
                crashedCivilizationTags: "Fantázia Sci-fi Stratégia v reálnom čase",
                crashedCivilizationParagraph: "Príbeh o ľuďoch z vesmíru, kde boli privedení k zániku, skokom z dimenzií na svojej vesmírnej lodi do sveta fantázie plného elfov, orkov, beštií mužov a ich hlavných nepriateľských hmyzích démonov.",
                taleAuthorHeader: "Autor:",
                taleGenreHeader: "Žánre:",
                taleLTSGenres:"Fantázia - Stredovek - Akcia",
                taleCCGenres:"Fantázia - Stredovek - Akcia - Sci-fi - Vojna",
                taleUpdateHeader: "Aktualizované:",
                taleDescriptionHeader: "Popis:",
                taleDescriptionLTSParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin sapien elit, quis pulvinar sem pellentesque a. Nam vitae lorem odio. Nulla eget congue odio, a convallis tortor. Phasellus ac sagittis dolor, ut ornare elit. Vestibulum non lacus et ligula accumsan venenatis. Quisque vel porttitor odio, quis dapibus metus. Quisque mattis vulputate justo vitae rhoncus. Cras congue quis mauris non scelerisque. Nulla fermentum ante quis purus tincidunt semper.",
                taleDescriptionCCParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin sapien elit, quis pulvinar sem pellentesque a. Nam vitae lorem odio. Nulla eget congue odio, a convallis tortor. Phasellus ac sagittis dolor, ut ornare elit. Vestibulum non lacus et ligula accumsan venenatis. Quisque vel porttitor odio, quis dapibus metus. Quisque mattis vulputate justo vitae rhoncus. Cras congue quis mauris non scelerisque. Nulla fermentum ante quis purus tincidunt semper.",
                taleSteamHeader: "Odkaz na Steam",
                taleSteamLTSParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non ex mi. Maecenas in viverra lacus. Integer nec odio eget turpis dapibus dictum eu sed nulla. Nulla vulputate convallis viverra. Nam nibh odio, vestibulum et faucibus et, vulputate vel leo. Nulla porttitor id ante congue dictum.",
                taleSteamCCParagraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non ex mi. Maecenas in viverra lacus. Integer nec odio eget turpis dapibus dictum eu sed nulla. Nulla vulputate convallis viverra. Nam nibh odio, vestibulum et faucibus et, vulputate vel leo. Nulla porttitor id ante congue dictum.",
                contactHeader: "Kontakt",
                contactAddress: "Adresa",
                contactPhone: "Mobil",
                contactFormEmail: "Váš E-mail",
                contactFormSubject: "Váš Predmet",
                contactFormMessage: "Vaša Správa",
                contactFormSend: "ODOSLAŤ",
                profileUsername: "Úžívateľské Meno",
                profileUsernameParagraph: "Toto je vaše používateľské meno, ktoré sa zobrazí ostatným v sekcii komentárov a hrách",
                profileEmail: "Email",
                profileEmailParagraph: "Tieto informácie sú súkromné a nebudú zdieľané s ostatnými.",
                profilePassword: "Heslo",
                profilePasswordParagraph: "Odporúčame vám pravidelne aktualizovať heslo, aby ste zabránili neoprávnenému prístupu k vášmu účtu.",
                profileCurrentPassword: "Súčastné Heslo",
                profileNewPassword: "Nové Heslo",
                profileVerifyNewPassword: "Overte Nové Heslo",
                profileLogOut: "Odhlásiť sa",
                profileLogOutParagraph: "Prajeme Vám pekný deň",
                profileCancel: "ZRUŠIŤ",
                profileSave: "ULOŽIŤ ZMENY",
            },
        }
    }
});