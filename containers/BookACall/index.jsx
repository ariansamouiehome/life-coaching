import React  from 'react';
import FullWidthImageTextBanner from "components/FullWidthImageTextBanner";
import ColumnInfoImage from "components/ColumnInfoImage";
import ContactForm from "components/ContactForm";
import FullWidthInfo from "components/FullWidthInfo";
import AppHead from "components/Layout/AppHead";
import ImageSideText from "components/ImageSideText";
import BackImageFloatingContent from "components/BackImageFloatingContent";

const BookACall = () => {

    return (
        <>
            <AppHead
                title="- Work With Me"
                description="Fill out the form and tell me a little about yourself. What you're looking for and some of the challenges you face regularly"
                image="/images/profile-4-mobile.webp"
            />
            <FullWidthImageTextBanner
                title="Working One To One"
                backgroundImage="/images/helping.jpeg"
                contentCenter
                alt
                noDarkOverlay
            />

            <ColumnInfoImage
                title="Heal Your Trauma"
                description="In our sessions we will dive deep into your life experiences and uncover the areas of your life that has caused you to arrive at the place you are today."
                headingLine
                noCurve
            />

            <ImageSideText
                backgroundImage="/images/healing.jpeg"
                title="What is the goal?"
            >
                <p className="body-copy">We will heal the traumas from your childhood that you have carried to your adulthood.<br /><br />I will teach you how to get to a normal state of being, what shadow work is and how to release anxiety.<br /><br />We will cover how to practise self love and as a reflection, increase the love you will have in your life. <br /><br /> You will learn what trauma is, how we deal with it as humans and how to heal yourself from it.<br /><br />The skills that you will learn is something that you will take away with you and continuously apply throughout your life, as healing is a lifestyle.</p>
            </ImageSideText>

            <ColumnInfoImage
                noCurve
                title="Interested in working with me?"
                description="Fill out the form and tell me a little about yourself. <br /> I will then get in touch and we can arrange the start of your healing journey."
            />

            <ContactForm />

            <FullWidthInfo
                hTag={3}
                title="Meditation Sessions"
                description="Join my FREE online healing meditation sessions."
                cta_show
                cta_href="/meditation-sessions"
                cta_text="Reserve your spot"
                headingLine
            />
        </>
    )
}

export default BookACall;