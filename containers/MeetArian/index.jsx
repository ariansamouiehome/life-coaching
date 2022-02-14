import React from 'react';
import {scrollToPosition} from "../../utils/functions";
import FullWidthImageTextBanner from "components/FullWidthImageTextBanner";
import ColumnInfoImage from "components/ColumnInfoImage";
import ImageSideText from "components/ImageSideText";
import FullWidthInfo from "components/FullWidthInfo";
import BackImageFloatingContent from "components/BackImageFloatingContent";
import AppHead from "components/Layout/AppHead";

const MeetArian = () => {

    return (
        <>
            <AppHead
                title="- Meet Arian"
                description="Get to know why I have chosen to help people heal their minds."
                image="/images/profile-4-mobile.webp"
            />
            <FullWidthImageTextBanner
                title="HI, I'M ARIAN"
                description="Get to know why I have chosen to help people heal their minds,<br />what my background is and how I came to find my purpose."
                className="profile"
                contentCenter
                halfBackShadow
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
                title="Where My Story Started"
            >
                <p className="body-copy">Born in the year 1985, I started my life in the middle of the Iran-Iraq war. As all children we grow up knowing only what we experience. In order to protect me, my family tried to keep me away from the war that was happening around us.<br /><br /> In 1990 my mother, myself and older brother left Iran to start a new life in England and was reunited with my father joining us 2 years later. I never realised what was truly going on around me and how much everything was affecting me until I was an adult. <br /><br /> Throughout my life I had always struggled with extreme anxiety to the stage that I was in constant pain mentally as well as physically, but always presumed that what I was feeling was normal and everyone was feeling the same.</p>
            </ImageSideText>

            <BackImageFloatingContent
                backgroundImage="/images/pattern-back-4.png"
                title="Living In Two Cultures"
                headingLine
                curveBottom
            >
                <p className="body-copy">Growing up it felt like I was living in two worlds. I would go to school or out with my friends and experience Western British culture. And then go home and live in an Middle Eastern culture. This created a lot of challenging moments in my life, especially when the two would clash. I used to have a lot of resentment over that situation, as not only did it bring along a big sense of not belonging, but simple things became much harder for me compared to watching others go through the same experience. <br /><br />I now realise what a great experience it was. I grew up in two different cultures and was not only able to pick up the good from both, but it gave me a very unique and microscopic point of view into seeing how humans behave based on culture. <br /><br />It’s very interesting to me that simply being born in a specific part of the world shapes the person you become. It plays it’s role into your personality. It creates your beliefs and the way you think about yourself as well as everyone else. It gives you preferences regarding what kind of food you put in your body. It plays it's role in the kind of music you enjoy.<br /><br />Right now humans are so much more inviting to different cultures than I have ever seen and it seems like we’re getting better at it.
                </p>
            </BackImageFloatingContent>

            <ImageSideText
                backgroundImage="/images/purpose.webp"
                title="What Healing Has Done"
                contentSwitch
            >
                <p className="body-copy">I have always known that I should do specific things to improve myself. Maybe I could eat better, or go exercise more. Maybe I spend too much time on social media. Maybe I drink too much and need to cut down. But I struggled to keep any of the things I tried to do consistent. Even though I forced myself to stop, I always eventually went back. I still craved whatever it was that was dragging me to the bad foods. I still didn’t have enough energy to exercise properly. I had to force myself to stay off social media. <br /><br />Healing yourself gets out of the place where you still crave doing the things you know you don’t want to do. Without even trying, my diet has improved. I exercise regularly without effort. My time spent on social media browsing carelessly has reduced to almost none. <br /><br />When we look at all the things around us that we feel like we need to change, it can look like a lot of work, but all you need to do is concentrate on healing yourself. EVERYTHING ELSE will fall into place.</p>
            </ImageSideText>

            <FullWidthInfo
                hTag={3}
                title="START HEALING"
                description="Let's connect to start your healing journey and figure out why the things are the way they are. <br />You're never in the position where you can't start."
                cta_show
                cta_href="/work-with-me"
                cta_text="work with me"
                headingLine
            />
        </>
    )
}

export default MeetArian;