import React from 'react';
import Head from "next/head";
import {useRouter} from "next/router";

const AppHead = (props) => {

    // Data
    const {image, description, title} = props;
    const router = useRouter();

    return (<>
        <Head>
            <title>AS - {title}</title>
            {/*Facebook & Whatsapp*/}
            <meta name="msapplication-TileImage" content={image}/>
            <meta property="og:site_name" content="Arian Samouie Coaching"/>
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description}/>
            <meta property="og:image" content={image}/>
            <meta property="og:type" content="website"/>
            <meta property="og:image:type" content="image/webp"/>
            <meta property="og:image:width" content="300"/>
            <meta property="og:image:height" content="300"/>
            <meta property="og:url" content={router.asPath}/>
            <meta property="fb:app_id" content="arian_samouie_id"/>

            {/*Twitter*/}
            <meta name="twitter:title" content={title}/>
            <meta name="twitter:description" content={description}/>
            <meta name="twitter:image" content={image}/>
            <meta name="twitter:card" content={image}/>
            <meta name="twitter:image:alt" content="Site Image"/>

            {/*Favicon Links*/}
            <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon/apple-touch-icon.png"/>
            <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png"/>
            <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon/favicon-16x16.png"/>
            <link rel="manifest" href="/images/favicon/site.webmanifest"/>
            <link rel="mask-icon" href="/images/favicon/safari-pinned-tab.svg" color="#5bbad5"/>
            <meta name="msapplication-TileColor" content="#da532c"/>
            <meta name="theme-color" content="#ffffff"/>
        </Head>
    </>)
}

export default AppHead;