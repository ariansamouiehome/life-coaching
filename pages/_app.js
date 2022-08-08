import React, {useState, useEffect} from "react";
import 'styles/app.scss';
import Router, {useRouter} from 'next/router';
import {PageChangeContext} from "../utils/pageChangeContext";
import AppHead from "components/Layout/AppHead";

const MyApp = ({Component, pageProps}) => {
    // Data
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('https://ariansamouie.com/mind-matters-events')
        },100)
    },[])
    return (
        <PageChangeContext.Provider>
            {/*{show && <Header*/}
            {/*    showNav={showNav}*/}
            {/*    setShowNav={setShowNav}*/}
            {/*/>}*/}
            {/*<Component {...pageProps} />*/}
            {/*<Footer show={show}/>*/}
            <AppHead
                title="Mind Matter Events - Mindfulness Events"
                description="Mind Matters Events is a day of healing and fun for everyone. Welcome to this mindfulness event hosted in Liverpool. Our goal is to teach you the important parts of your mental health journey and how to heal your emotional wounds. emotional healing is very important when it comes to your spiritual journey into becoming self aware and raising your vibration. In our sessions we will have meditations, gong baths, sound baths, yoga, emotional healing workshops and an array of stalls that offer different knowledge or items for your healing journey."
                image="/images/mind-matters-share.jpeg"
            />
        </PageChangeContext.Provider>
    )
}

export default MyApp
