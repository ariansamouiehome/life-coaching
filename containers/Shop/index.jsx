import React, {useEffect, useState} from 'react';
import FullWidthImageTextBanner from "components/FullWidthImageTextBanner";
import AppHead from "components/Layout/AppHead";
import ColumnInfoImage from "components/ColumnInfoImage";
import coursesInformation from 'utils/courses'
import ListWrapper from "components/ListWrapper";
import CourseCard from "components/CourseCard";
import FullWidthInfo from "components/FullWidthInfo";
import ImageSideText from "components/ImageSideText";
import FullWidthVideoPlayer from "components/FullWidthVideoPlayer";
import {scrollToPosition} from "../../utils/functions";
import PageNotFound from "components/PageNotFound";

const Shop = () => {

    // States
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    return (
        <>
            <AppHead
                title="Online Shop"
                description="Check out which course would be helpful with what you are looking for."
                image="/images/shops.jpeg"
            />
            <FullWidthImageTextBanner
                title="Shop"
                backgroundImage="/images/courses.jpeg"
                description="Check out my Courses and Meditations that are built to help you heal yourself from the experiences we have had throughout our lives."
                contentCenter
                alt
            />

            <ColumnInfoImage
                title="Product List"
                description="All courses include video chapters."
                headingLine
                paddingBottom
            />

            <div id="course-list">
                <ListWrapper
                    loadingState={loading}
                    loadingStyleAlt
                    listWrapperItems={coursesInformation.map((item, key) => <CourseCard data={item}/>)}
                />
            </div>

            <ImageSideText
                backgroundImage="/images/self-invest.jpeg"
                title="Self Investment"
            >
                <p className="body-copy">We tend to find it very easy to invest our time in doing things that may give
                    us "quick win" feelings. Things such as going out to the club and bars to take our minds off the
                    mental pain we feel. <br/> <br/> But what this is doing is creating distractions for us (copping mechanisms). Anything that is taking our attention away from us feeling our emotions, is going
                    in the opposite direction of healing.<br/><br/>


                    From an early age we learnt to deal with emotional pain by pushing it away. This is not a healthy
                    way of being. <br/><br/> The way we heal any emotional pain and trauma is by going towards the pain,
                    not away from it. So investing time into your own healing journey is the key to be able to heal the
                    aspects of yourself that need to be healed. <br/><br/> Get used to prioritising your healing journey
                    over most things in your life. Your healing is one of the most important things in your life as YOU
                    are the most important thing in your life.</p>
            </ImageSideText>

            <div id="video-component">
                <FullWidthVideoPlayer
                    title="What Are Thoughts?"
                    iframeSrc="https://www.youtube.com/embed/3UGEfefw_CY?rel=0"
                    thumbnailImage="/images/thoughts-promo.jpeg"
                />
            </div>

            <ImageSideText
                backgroundImage="/images/healing-journey.jpeg"
                title="Healing Journey"
                contentSwitch
                cta_text="Start Healing"
                onClick={() => scrollToPosition('course-list')}
            >
                <p className="body-copy">We are all on our own healing journey. Everyone has experienced life in their
                    own unique way.<br/><br/> No-one has experienced the same things you have, so it
                    doesn't make sense to compare yourself to anyone else when it comes to healing.<br/><br/>There is no
                    time limit of when you should start feeling better, or be in a better place.<br/><br/> We grow up
                    with such unrealistic expectations projected onto us and carry these over to when we are
                    adults. <br/><br/>Let go of any expectation you have on yourself and learn to unconditionally accept
                    yourself for who you are.</p>
            </ImageSideText>

            <FullWidthInfo
                hTag={3}
                title="NEW WEBSITE COMING SOON"
                description="I am updating this website so you can access my meditations and online course from my shop. This is nearly finished and will be available very soon."
                headingLine
            />
        </>
    )

    // return <PageNotFound/>;
}

export default Shop;