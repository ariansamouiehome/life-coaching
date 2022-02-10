import React, {useState} from 'react';
import FullWidthImageTextBanner from "components/FullWidthImageTextBanner";
import ColumnInfoImage from "components/ColumnInfoImage";
import FullWidthVideoPlayer from "components/FullWidthVideoPlayer";
import FullWidthInfo from "components/FullWidthInfo";
import AppHead from "components/Layout/AppHead";
import MediationForm from "components/MediationForm";
import ContextCard from "components/ContextCard";
import TestimonialForm from "components/TestimonialForm";

const Meditation = () => {

    // Data
    const sessionDate = '22nd Feb - 8:00pm';

    // State
    const [testimonialState, setTestimonialState] = useState(false);

    return (
        <>
            <AppHead
                title="- Meditation Session"
                description="Meditation Sessions Held by Arian."
                image="/images/meditation.jpeg"
            />
            <ContextCard
                state={testimonialState}
                setState={setTestimonialState}
                heading="Testimonial"
            >
                <TestimonialForm subject="Learn To Let Go"/>
            </ContextCard>
            <FullWidthImageTextBanner
                title="Meditation Sessions"
                description={`Next session <br />${sessionDate} (Zoom call)`}
                backgroundImage="/images/meditation.jpeg"
                contentCenter
                alt
                blackAndWhiteImage
            />

            <ColumnInfoImage
                title="Learn To Control Your Thoughts!"
                description="One of the best ways to heal is to let go of everything. <br /> Your mind, your body, your feelings and your thoughts. <br /> Become your consciousness. <br /> To understand more, watch the video below."
                headingLine
                paddingBottom
            />

            <FullWidthVideoPlayer
                title="Find Out More"
                iframeSrc="https://www.youtube.com/embed/IA6N8RGEmaE?rel=0"
                thumbnailImage="/images/meditation-session-thumbnail.jpeg"
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
                title="Testimonial"
                description="It would be great to hear what you thought about the session.<br /> Please share a few thoughts about your experience."
                cta_show
                cta_onClick={() => setTestimonialState(true)}
                cta_text="Submit Testimonial"
                headingLine
            />
        </>
    )
}

export default Meditation;