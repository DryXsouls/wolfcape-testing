import React from "react";

function Map(){
    return(
        <>
            <iframe className='google-contact-map'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1331.1831942557453!2d17.087527604654206!3d48.14174125460836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c8bdfa15f4925%3A0x3ad9c33f308be9a5!2sRiver%20Park%20Offices!5e0!3m2!1ssk!2ssk!4v1715513433943!5m2!1ssk!2ssk"
                width="1080"
                height="600"
                style={{border:"0"}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map - WolfCape - River Park Offices"
            ></iframe>
        </>
    );
}

export default Map;