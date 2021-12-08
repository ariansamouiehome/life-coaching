import React from 'react';
import FullWidthImageTextBanner from "components/FullWidthImageTextBanner";
import ColumnInfoImage from "components/ColumnInfoImage";
import FullWidthVideoPlayer from "components/FullWidthVideoPlayer";
import FullWidthInfo from "components/FullWidthInfo";
import AppHead from "components/Layout/AppHead";
import MediationForm from "components/MediationForm";

const Meditation = () => {

    // Data
    const sessionDate = '16th Dec - 8:00pm';

    return (
        <>
            <AppHead
                title="- Meditation Session"
                description="Meditation Sessions Held by Arian."
                image="/images/meditation.jpeg"
            />
            <FullWidthImageTextBanner
                title="Meditation Sessions"
                description={`${sessionDate} (Zoom call)`}
                backgroundImage="/images/meditation.jpeg"
                contentCenter
                alt
                blackAndWhiteImage
            />

            <ColumnInfoImage
                title="Learn To Let Go!"
                description="One of the best ways to heal is to let go of everything. <br /> Your mind, your body, your feelings and your thoughts. <br /> Become your consciousness. <br /> To understand more, watch the video below."
                headingLine
                paddingBottom
            />

            <FullWidthVideoPlayer
                title="Find Out More"
                iframeSrc="https://www.youtube.com/embed/xA5CGvqv05Y?rel=0"
                thumbnailImage="/images/self-love-thumbnail.jpeg"
            />

            <ColumnInfoImage
                title="Want to be involved?"
                description={`The next FREE online meditation session will be on ${sessionDate} <br />(Zoom call). <br />Fill out the form to secure your position.`}
                headingLine
                noCurve
            />

            <MediationForm sessionDate={sessionDate}/>

            <FullWidthInfo
                hTag={3}
                title="Get to know Arian"
                description="Find out more about my background and why I have chosen to do what I do."
                cta_show
                cta_href="/meet-arian"
                cta_text="Meet Arian"
                headingLine
            />
        </>
    )
}

export default Meditation;