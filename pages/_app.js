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
                title="Mind Matter Events"
                description="Mind Matters Events is a place to expand your knowledge and learn how to heal your emotional wounds. A place that gives you the understanding and awareness required to progress on your healing path in order to connect deeper to your natural state and become your most authentic healed self."
                image="/images/mind-matters.jpeg"
            />
        </PageChangeContext.Provider>
    )
}

export default MyApp
