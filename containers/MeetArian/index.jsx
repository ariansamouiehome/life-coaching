import React from 'react';
import Head from 'next/head'
import {scrollToPosition} from "../../utils/functions";
import FullWidthImageTextBanner from "components/FullWidthImageTextBanner";
import ColumnInfoImage from "components/ColumnInfoImage";
import ImageSideText from "components/ImageSideText";
import FullWidthInfo from "components/FullWidthInfo";
import BackImageFloatingContent from "components/BackImageFloatingContent";

const MeetArian = () => {

    return (
        <>
            <Head>
                <title>AS - Meet Arian</title>
                {/*Facebook & Whatsapp*/}

                <meta name="msapplication-TileImage" content="/images/profile.webp"/>
                <meta property="og:site_name" content="Arian Samouie Coaching"/>
                <meta property="og:title" content="Meet Arian"/>
                <meta property="og:description" content="Get to know why I have chosen to help people heal their minds"/>
                <meta property="og:image" content="/images/profile.webp"/>
                <meta property="og:type" content="website"/>
                <meta property="og:image:type" content="image/webp"/>
                <meta property="og:image:width" content="300"/>
                <meta property="og:image:height" content="300"/>
                <meta property="og:url" content="http://www.ariansamouie.com/meet-arian"/>
                <meta property="fb:app_id" content="arian_samouie_id"/>

                {/*Twitter*/}
                <meta name="twitter:title" content="Meet Arian"/>
                <meta name="twitter:description"
                      content="Get to know why I have chosen to help people heal their minds."/>
                <meta name="twitter:image" content="/images/profile.webp"/>
                <meta name="twitter:card" content="/images/profile.webp"/>
                <meta name="twitter:image:alt" content="Profile Image"/>
            </Head>
            <FullWidthImageTextBanner
                title="HI, I'M ARIAN"
                description="Get to know why I have chosen to help people heal their minds,<br />what my background is and how I came to find my purpose."
                backgroundImage="/images/profile.webp"
                contentCenter
                showScrollArrow
                arrowsOnCLick={() => scrollToPosition('second-component')}
            />

            <div id="second-component">
                <ColumnInfoImage
                    title="My Goal Is To Teach People How To Heal Themselves."
                    noCurve
                />
            </div>

            <ImageSideText
                backgroundImage="/images/iran.webp"
                title="Where my story started"
                description="Born in the year 1985, I started my life in the middle of the Iran-Iraq war. As all children we grow up knowing only what we experience. In order to protect me, my family tried to keep me away from the war that was happening around us.<br /><br /> In 1990 my mother, myself and older brother left Iran to start a new life in England and was reunited with my father joining us 2 years later. I never realised what was truly going on around me and how much everything was affecting me until I was an adult. <br /><br /> Throughout my life I had always struggled with extreme anxiety to the stage that I was in constant pain mentally as well as physically, but always presumed that what I was feeling was normal and everyone was felling the same. "
            />

            <BackImageFloatingContent
                backgroundImage="/images/pattern-back-4.png"
                title="What role I played in my first social circle"
                href="/book-a-call"
                cta_text="Lets connect"
                headingLine
                curveBottom
            >
                <p className="body-copy">Send me a message and we can start the journey to figuring out why the things
                    are the way they are. <br/>You're never in the position where you can't start. the latin on the
                    website as Chrome loves to keep telling me to translate it The reason I am changing this text is to
                    get rid of the latin on the website as Chrome loves to keep telling me to translate it. <br/><br/>The
                    reason I am changing this text is to get rid of the latin on the website as Chrome loves to keep
                    telling me to transl on the website as Chrome loves to keep telling me to translate it The reason I
                    am changing this text is to get rid of the latin on the website as Chrome loves to keep telling me
                    to translate it. The reason I am changing this text is to get rid of the latin on the website as
                    Chrome loves to keep telling me to transl</p>
            </BackImageFloatingContent>

            <ImageSideText
                backgroundImage="/images/purpose.webp"
                title="What healing has done for me."
                description="No more pain"
                href="/shadow-work"
                cta_text="Shadow work"
                contentSwitch
            />

            <FullWidthInfo
                hTag={3}
                title="LETS CONNECT"
                description="Send me a message and we can start the journey to figuring out why the things are the way they are. <br />You're never in the position where you can't start."
                cta_show
                cta_href="/book-a-call"
                cta_text="Book a call"
                headingLine
            />
        </>
    )
}

export default MeetArian;