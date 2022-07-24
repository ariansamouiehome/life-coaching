import React, {useState, useEffect} from "react";
import 'styles/app.scss';
import Router, {useRouter} from 'next/router';
import {PageChangeContext} from "../utils/pageChangeContext";

const MyApp = ({Component, pageProps}) => {
    // Data
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('https://ariansamouie.com/mind-matters-events')
        },100)
    },[])
    return (
        <PageChangeContext.Provider >
            {/*{show && <Header*/}
            {/*    showNav={showNav}*/}
            {/*    setShowNav={setShowNav}*/}
            {/*/>}*/}
            {/*<Component {...pageProps} />*/}
            {/*<Footer show={show}/>*/}
        </PageChangeContext.Provider>
    )
}

export default MyApp
