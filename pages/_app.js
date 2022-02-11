import React, {useState, useEffect} from "react";
import 'styles/app.scss';
import AOS from 'aos';
import {isMobile} from 'react-device-detect';
import Header from "components/Layout/Header";
import Footer from "components/Layout/Footer";
import Router, {useRouter} from 'next/router';
import {PageChangeContext} from "../utils/pageChangeContext";
import {scrollToPosition} from "../utils/functions";
import axios from "axios";

const MyApp = ({Component, pageProps}) => {

    // Data
    const router = useRouter();

    // States
    const [show, setShow] = useState(null);
    const [loggedIn, setLoggedIn] = useState(true);
    const [showNav, setShowNav] = useState(false);
    const [showBackToButton, setShowBackToButton] = useState(false);
    const [pageScrollTarget, setPageScrollTarget] = useState({
        target: '',
        from: ''
    });
    const [bag, setBag] = useState({
        items: [
            {
                id: 1,
                title: 'Self Love',
                price: 15,
            },
            {
                id: 2,
                title: 'How to stop worrying',
                price: 15,
            },
        ],
        subTotal: 10,
        vat: 2,
        total: 12
    });

    const clickedPageChangeScrollToPosition = (href, target, from) => {
        setPageScrollTarget({target: target, from: from});
        router.push(href);
        setTimeout(() => {
            setShowBackToButton(true);
            scrollToPosition(target);
        },500);
        setTimeout(() => {
            setPageScrollTarget({target: '', from: from})
        },1000);
    };

    useEffect(() => {
        AOS.init({
            offset: isMobile ? 50 : 250,
            once: true
        });
        checkToShow();
        // axios.get('/api/bag')
        //     .then(data => {
        //         console.log(data);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
    }, []);


    Router.events.on('routeChangeComplete', () => {
        // Starts new pages at the top of page
        document.documentElement.style = "scroll-behavior: auto";
        document.documentElement.scrollTo({ top: 0, behavior: 'auto' });
        setShowNav(false);
        setShowBackToButton(false);
        checkToShow();
    });

    const checkToShow = () => {
        if (router.asPath === '/links') {
            setShow(false);
        } else {
            setShow(true);
        }
    }

    return (
        <PageChangeContext.Provider value={{pageScrollTarget, showBackToButton, bag, setBag, loggedIn, clickedPageChangeScrollToPosition}}>
            {show && <Header
                showNav={showNav}
                setShowNav={setShowNav}
            />}
            <Component {...pageProps} />
            <Footer show={show}/>
        </PageChangeContext.Provider>
    )
}

export default MyApp
