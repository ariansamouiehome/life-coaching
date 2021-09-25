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
        </Head>
    </>)
}

export default AppHead;