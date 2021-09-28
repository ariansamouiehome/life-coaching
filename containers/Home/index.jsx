import React, {useContext} from 'react';
import {scrollToPosition} from "../../utils/functions";
import FullWidthImageTextBanner from "components/FullWidthImageTextBanner";
import ColumnInfoImage from "components/ColumnInfoImage";
import FullWidthVideoPlayer from "components/FullWidthVideoPlayer";
import ImageSideText from "components/ImageSideText";
import FullWidthInfo from "components/FullWidthInfo";
import BackImageFloatingContent from "components/BackImageFloatingContent";
import AppHead from "components/Layout/AppHead";
import Clickable from "components/Elements/Clickable";
import {PageChangeContext} from "../../utils/pageChangeContext";

const Home = () => {

    // Data
    const columnInfoImage = [
        {
            title: 'WHAT IS TRAUMA?',
            description: 'In the moment of trauma, a person experiences distress without resolve. When this happens our consciousness fragments into parts.',
            image: 'images/icons/trauma.png',
        },
        {
            title: 'HOW IT AFFECTS US',
            description: 'These parts are at war with each other which creates pain in our internal system. And instead of resolving it we tend to turn to what ever pill or substance we can take to drown out that pain.',
            image: 'images/icons/infection.png',
        },
        {
            title: 'HOW TO HEAL FROM IT',
            description: 'The way we heal from trauma is to get the fragmented parts of ourselves on the same page and in a position of agreement in order to achieve resolution.',
            image: 'images/icons/heart.png',
        },
    ];
    const {clickedPageChangeScrollToPosition} = useContext(PageChangeContext);

    return (
        <>
            <AppHead
                title=""
                description="BECOME THE MOST AUTHENTIC YOU. The further away we are from our most authentic self,<br /> the further away we are to healing"
                image="/images/peace.webp"
            />
            <FullWidthImageTextBanner
                title="BECOME THE MOST <br /> AUTHENTIC YOU"
                description="The further away we are from our most authentic self,<br /> the further away we are to healing."
                backgroundImage="/images/peace.webp"
                contentCenter
                showScrollArrow
                arrowsOnCLick={() => scrollToPosition('second-component')}
            />

            <div id="second-component">
                <ColumnInfoImage
                    title="WHY IS IT A STRUGGLE?"
                    description="We will work towards finding out why things are the way they are. Once we find out the why, we are able to start healing from the core of that why in order to achieve resolution."
                    data={columnInfoImage}
                    headingLine
                />
            </div>

            <FullWidthVideoPlayer
                title="MEET ARIAN"
                iframeSrc="https://www.youtube.com/embed/ac6nfXLYAok?rel=0"
                thumbnailImage="/images/profile.webp"
            />

            <ColumnInfoImage
                title="If you fail at something you don't want,<br /> you still fail. <br />So why not fail at something you do want?"
                noCurve
            />

            <ImageSideText
                backgroundImage="/images/self-love.webp"
                title="What is self care?"
                href="/book-a-call"
                cta_text="book a call"
            >
                <p className="body-copy">We react the same way when speaking to ourselves as we would if someone else was speaking to us. If a friend spoke to you the way you speak to yourself, would you still be their friend? The only difference is we can get away from that friend, but we cannot get away from ourselves.<br /><br />Learn how to accept the ego and change the judgmental thoughts you have about yourself given to you by others. <br /><br />Being aware of how you treat yourself is one of the most powerful things you can learn as a human.<br /><br /> To learn more about self love, get in touch.</p>
            </ImageSideText>

            <div id="external-validation">
                <BackImageFloatingContent
                    backgroundImage="/images/pattern-back-4.png"
                    title="Why Do We Seek External Validation."
                    href="/book-a-call"
                    cta_text="Book a call"
                    headingLine
                    curveBottom
                >
                    <p className="body-copy">We are born whole and relationally dependent for survival as children. The
                        world we live in today has a
                        lot of behaviours that are considered 'normal'. Something as simple as getting a star for a good
                        drawing
                        as a child plays it's role in teaching us that our worth is based on the approval of an external
                        opinion,
                        other than ourselves. As a child we learn that approval means acceptance, and being accepted means
                        that we
                        have that relationship we depend on for survival.<br/><br/> In moments a child does not feel
                        safe and
                        feels they could lose the relationship they depend on for survival, their consciousness <Clickable onClick={() => clickedPageChangeScrollToPosition('/shadow-work', 'fragmentation', 'External Validation')} toolTip="What is fragmentation?" toolTipWidth={170} brandOne>fragments</Clickable> in order
                        to conform with the desire and approval of their caregivers. This behaviour has become 'normal' and
                        in some cases, is expected. <br/><br/> We then carry this
                        behaviour over to adulthood and in order to feel safe the only way we learnt how to, we
                        constantly
                        search for that approval externally. In some extreme cases, someone seeking external validation
                        would be considered as a people pleaser.<br/><br/> To learn more about how to heal from seeking
                        external validation, get in touch.</p>
                </BackImageFloatingContent>
            </div>

            <ImageSideText
                backgroundImage="/images/relationship.webp"
                title="Do your relationships have the same outcome?"
                href="/book-a-call"
                cta_text="get in touch"
                contentSwitch
            >
                <p className="body-copy">
                    Being humans, at our core we are relationally dependent. We have relationships with everyone in our lives. Growing up we learn about relationships in our environment. How to treat others, what’s ok to do and what’s not ok to do. Our experiences teach us what our version of love is.<br /><br />We all have relationship dynamics. These are patterns of behaviour between people in the ways that we relate, communicate and interact with each other. <br /><br />Recognising the dynamics that play out in our relationships puts us in a very powerful position. It allows us to navigate the challenges we face with each other. We increase compassion and experience more love and fulfillment throughout our days.<br /><br /> To learn more, book a call</p>
            </ImageSideText>

            <FullWidthInfo
                hTag={3}
                title="SHADOW WORK"
                description="Find out what the human shadow is and how to use shadow work to heal yourself."
                cta_show
                cta_href="/shadow-work"
                cta_text="Find out more"
                headingLine
            />
        </>
    )
}

export default Home;