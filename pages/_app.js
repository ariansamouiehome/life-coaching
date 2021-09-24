import React, {useState, useEffect} from "react";
import 'styles/app.scss';
import AOS from 'aos';
import {isMobile} from 'react-device-detect';
import Header from "components/Layout/Header";
import Footer from "components/Layout/Footer";
import Router from 'next/router';

const MyApp = ({Component, pageProps}) => {

    // States
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        AOS.init({
            offset: isMobile ? 50 : 250,
            once: true
        });
    }, []);


    Router.events.on('routeChangeComplete', () => {
        // Starts new pages at the top of page
        document.documentElement.style = "scroll-behavior: auto";
        document.documentElement.scrollTo({ top: 0, behavior: 'auto' });
    });


    return (
        <>
            <Header
                showNav={showNav}
                setShowNav={setShowNav}
            />
            <Component {...pageProps} />
            <Footer/>
        </>
    )
}

export default MyApp
