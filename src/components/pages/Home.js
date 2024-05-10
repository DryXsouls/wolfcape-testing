import React from "react";
import '../../App.css'
import Header from "../Header";
import Articles from "../Articles";
import Footer from "../Footer";

function Home(){
    return(
        <>
            <Header/>
            <Articles/>

            <Footer/>
        </>
    );
}

export default Home;
