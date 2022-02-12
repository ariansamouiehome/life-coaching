import React  from 'react';
import FullWidthImageTextBanner from "components/FullWidthImageTextBanner";
import ColumnInfoImage from "components/ColumnInfoImage";
import ContactForm from "components/ContactForm";
import FullWidthInfo from "components/FullWidthInfo";
import AppHead from "components/Layout/AppHead";
import FullWidthVideoPlayer from "components/FullWidthVideoPlayer";
import Clickable from "components/Elements/Clickable";
import ImageSideText from "components/ImageSideText";

const BookACall = () => {

    return (
        <>
            <AppHead
                title="- One To One"
                description="Fill out the form and tell me a little about yourself. What you're looking for and some of the challenges you face regularly"
                image="/images/profile-4-mobile.webp"
            />
            <FullWidthImageTextBanner
                title="Trauma Healing"
                backgroundImage="/images/helping.jpeg"
                contentCenter
                alt
                noDarkOverlay
            />

            <ColumnInfoImage
                title="Join My 12 Week <br /> One To One Trauma Healing Course"
                description="This course will be 12 (90 minute) weekly private sessions with myself over Zoom calls."
                headingLine
                noCurve
            />

            <ImageSideText
                backgroundImage="/images/healing.jpeg"
                title="What is the goal?"
            >
                <p className="body-copy">In these sessions we will dive deep into your life experiences and uncover the areas of your life that has caused you to arrive at the place you are today.<br /><br />We will dive deep and heal the traumas from your childhood that has been affecting you in your adulthood.<br /><br />I will teach you how to get to a normal state of being and how to release anxiety.<br /><br /> You will learn what trauma is, how we deal with it as humans and multiple ways to heal yourself from it.<br /><br />The skills that you will learn is something that you will take away with you and continuously apply throughout your life, as healing is a lifestyle.</p>
            </ImageSideText>

            <FullWidthVideoPlayer
                title="Find Out More"
                iframeSrc="https://www.youtube.com/embed/v8GP6tn4798?rel=0"
                thumbnailImage="/images/what-is-trauma.jpeg"
                paddingTop
            />

            <ColumnInfoImage
                noCurve
                title="Interested in this course?"
                description="Fill out the form and tell me a little about yourself. <br /> I will then get in touch arrange the start of your healing journey.<br /> <span>12 weeks - £2490</span>"
            />

            <ContactForm />

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

export default BookACall;