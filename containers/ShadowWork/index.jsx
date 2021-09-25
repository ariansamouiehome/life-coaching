import React, {useEffect} from 'react';
import FullWidthImageTextBanner from "components/FullWidthImageTextBanner";
import ColumnInfoImage from "components/ColumnInfoImage";
import FullWidthInfo from "components/FullWidthInfo";
import ImageSideText from "components/ImageSideText";
import BackImageFloatingContent from "components/BackImageFloatingContent";
import {useRouter} from "next/router";
import {scrollToPosition} from "../../utils/functions";
import Head from "next/head";

const ShadowWork = () => {

    const columnInfoImage = [
        {
            title: 'CONSCIOUS & SUB-CONSCIOUS',
            description: 'The conscious is the aspect of ourselves that we are aware of, were as the subconscious is the aspect of ourselves that we are unaware of.',
            image: 'images/icons/conscious-and-sub.png',
        },
        {
            title: 'DENYING OUR FEELINGS',
            description: 'We learn to deny our feelings consciously over and over again by rejecting and pushing that part of us into a place we cannot see, our subconscious.',
            image: 'images/icons/grief.png',
        },
        {
            title: 'BECOMING AWARE',
            description: 'To become aware of something you have to be able to see it. Shadow work makes you aware to the aspects that we rejected and stored in our subconscious.',
            image: 'images/icons/aware.png',
        },
    ]
    const router = useRouter();
    const pageLoadScrollTarget = router.query.pageLoadScrollTarget;

    useEffect(() => {
        setTimeout(() => {
            pageLoadScrollTarget === 'fragmentation' && scrollToPosition('fragmentation');
        },500);
    },[]);

    return (
        <>
            <Head>
                <title>AS - Meet Arian</title>
                {/*Facebook & Whatsapp*/}

                <meta name="msapplication-TileImage" content="/images/shadow.webp"/>
                <meta property="og:site_name" content="Arian Samouie Coaching"/>
                <meta property="og:title" content="Shadow Work"/>
                <meta property="og:description" content="WHAT IS THE HUMAN SHADOW? The human shadow is any aspect of a person that has not yet been exposed to the light of their consciousness."/>
                <meta property="og:image" content="/images/shadow.webp"/>
                <meta property="og:type" content="website"/>
                <meta property="og:image:type" content="image/webp"/>
                <meta property="og:image:width" content="300"/>
                <meta property="og:image:height" content="300"/>
                <meta property="og:url" content="http://www.ariansamouie.com/shadow-work"/>
                <meta property="fb:app_id" content="arian_samouie_id"/>

                {/*Twitter*/}
                <meta name="twitter:title" content="Shadow Work"/>
                <meta name="twitter:description"
                      content="WHAT IS THE HUMAN SHADOW? The human shadow is any aspect of a person that has not yet been exposed to the light of their consciousness."/>
                <meta name="twitter:image" content="/images/shadow.webp"/>
                <meta name="twitter:card" content="/images/shadow.webp"/>
                <meta name="twitter:image:alt" content="Profile Image"/>
            </Head>
            <FullWidthImageTextBanner
                title="SHADOW WORK"
                backgroundImage="/images/shadow.webp"
                contentCenter
                alt
            />

            <ColumnInfoImage
                title="WHAT IS THE HUMAN SHADOW?"
                description="The human shadow is any aspect of a person that has not <br/>yet been exposed to the light of their consciousness."
                data={columnInfoImage}
                headingLine
            />

            <BackImageFloatingContent
                backgroundImage="/images/pattern-back-4.png"
                title="Societal Socialising"
                href="/book-a-call"
                cta_text="Get in touch"
                headingLine
                backgroundFade
                curveBottom
            >
                <p className="body-copy">Growing up we all learn what aspect of ourselves is acceptable and what is not. This is due to the social control technique of good behaviour equals reward, whilst bad behaviour equals punishment and rejection. This social control technique is something that has existed since the 1600's which every previous line of our family has gone through and been a victim of. <br/><br/> The aspects of us that have been seen as unacceptable were rejected by our caregivers. As a child being dependent on our social circle for survival, we learnt to push away those aspects of ourselves that were deemed not acceptable, whilst simultaneously exaggerating the aspects of us that are approved of by our caregivers, as they did for theirs, and so on. <br /> <br />Being completely dependant on our caregivers for survival, this behaviour became our coping mechanism. This coping mechanism becomes our default way of being that we take into adulthood. By this point our behaviour of rejecting the aspects of ourselves that is deemed not acceptable has become so ingrained in us, that we no longer have a real concept of our most authentic self anymore.<br /> <br />The way we heal from this is to find those aspects of ourselves that we denied, rejected and disowned from our subconscious and bring them to the light of our consciousness. We do this with having unconditional love for those parts and opening up so that we can finally hear what they have to say. <br /> <br /> To learn more about shadow work, get in touch.</p>
            </BackImageFloatingContent>

            <div id="fragmentation">
                <ImageSideText
                    backgroundImage="/images/mirror.webp"
                    title="What Is Fragmentation?"
                    description="Fragmentation is the primary coping mechanism for a physical human.<br /><br />We have an outdated definition of the meaning for trauma. We tend to define trauma only when it’s the most extreme stuff a person has experienced. Such as mental or sexual abuse, human trafficking or death in the family. Every single human has trauma. This means everyone has fragmentation within their being.<br /><br /> As humans the way we cope with trauma is that we dissociate. Every time we experience trauma (distress without resolve), your consciousness splits into parts. And the way we cope is by burying those feelings deep in our subconscious when the split occurs.<br /><br /> In order to heal we must reintegrate those fragments into our being. To learn more about Fragmentation, get in touch and book a call."
                    href="/book-a-call"
                    cta_text="GET IN TOUCH"
                />
            </div>

            <FullWidthInfo
                hTag={3}
                title="Good Or Bad?"
                description="As humans, we have the ability to hold beliefs. Everyone has their own beliefs. <br />There is no such things as good or bad. <br />Every action you take will be judged subjectively from another human, based on their own beliefs."
                headingLine
            />

        </>
    )
}

export default ShadowWork;