import React from 'react';
import FullWidthImageTextBanner from "components/FullWidthImageTextBanner";
import ColumnInfoImage from "components/ColumnInfoImage";
import FullWidthVideoPlayer from "components/FullWidthVideoPlayer";
import FullWidthInfo from "components/FullWidthInfo";
import AppHead from "components/Layout/AppHead";
import MediationForm from "components/MediationForm";

const Meditation = () => {

    // Data

    return (
        <>
            <AppHead
                title="- Meditation Session"
                description="Meditation Sessions Held by Arian."
                image="/images/shadow.webp"
            />
            <FullWidthImageTextBanner
                title="Meditation Sessions"
                description="15th Dec - 8:00pm (Zoom call)"
                backgroundImage="/images/shadow.webp"
                contentCenter
                alt
            />

            <ColumnInfoImage
                title="Learn To Let Go!"
                description="One of the best ways to heal is to let go of everything <br /> and only be your consciousness. <br /> To understand more, watch the video below."
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
                description="The next online meditation session will be on 15th Dec at 8:00pm on a zoom call. <br />Fill out the form to secure your position."
                headingLine
                noCurve
            />

            <MediationForm/>

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