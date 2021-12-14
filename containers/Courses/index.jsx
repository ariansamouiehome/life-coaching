import React, {useEffect, useState} from 'react';
import FullWidthImageTextBanner from "components/FullWidthImageTextBanner";
import AppHead from "components/Layout/AppHead";
import ColumnInfoImage from "components/ColumnInfoImage";
import coursesInformation from 'utils/courses'
import ListWrapper from "components/ListWrapper";
import CourseCard from "components/CourseCard";
import FullWidthInfo from "components/FullWidthInfo";
import Clickable from "components/Elements/Clickable";
import ImageSideText from "components/ImageSideText";
import FullWidthVideoPlayer from "components/FullWidthVideoPlayer";
import {scrollToPosition} from "../../utils/functions";

const Courses = () => {

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
                title="Online Courses"
                description="Check out which course would be helpful with what you are looking for."
                image="/images/courses.jpeg"
            />
            <FullWidthImageTextBanner
                title="Online Courses"
                description="Get full access to all courses for just £50"
                backgroundImage="/images/courses.jpeg"
                contentCenter
                alt
            />

            <ColumnInfoImage
                title="Get Access"
                description="Check out which course would be helpful with what you are looking for. <br />All courses will have video chapters with clear ."
                headingLine
                paddingBottom
            />

            <ListWrapper
                loadingState={loading}
                loadingStyleAlt
                listWrapperItems={coursesInformation.map((item, key) => <CourseCard data={item}/>)}
            />

            <ImageSideText
                backgroundImage="/images/self-invest.jpeg"
                title="Self Investment"
                cta_text="Learn More"
                onClick={() => scrollToPosition('video-component')}
            >
                <p className="body-copy">We tend to find it very easy to invest our time in doing things that may give us quick win feelings. Things such as going out to the club and bars to take our minds off the mental pain we feel. <br /> <br /> But what this is doing is creating distractions for us which is a copping mechanism. Anything that is taking our attention away from our healing and emotions is going in the opposite direction of healing.<br /><br />


                    From an early age we learnt to deal with emotional pain by pushing it away. This is not a healthy way of being. <br /><br /> The way we heal any emotional pain and trauma is by going towards the pain, not away from it. So investing time into your own healing journey is the key to be able to heal the aspects of yourself that need to healed. <br/><br /> Get used to prioritising your healing journey over most things in your life. Your healing is one of the most important things in your life as YOU are the most important thing in your life.</p>
            </ImageSideText>

            <div id="video-component">
                <FullWidthVideoPlayer
                    title="Why Self Invest?"
                    iframeSrc="https://www.youtube.com/embed/0Yz1_AuGE5k?rel=0"
                    thumbnailImage="/images/addiction.jpeg"
                />
            </div>

            <ImageSideText
                backgroundImage="/images/shadow.webp"
                title="Shadow Work"
                href="/shadow-work"
                cta_text="Learn more"
                contentSwitch
            >
                <p className="body-copy">What is Shadow Work and why is it so important?</p>
            </ImageSideText>

            <FullWidthInfo
                hTag={3}
                title="Meditation Sessions"
                description="Join in some meditation sessions to help heal yourself as well as learn how to let go."
                cta_show
                cta_href="/meditation-sessions"
                cta_text="Find out more"
                headingLine
            />
        </>
    )
}

export default Courses;