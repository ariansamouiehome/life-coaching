import React, {useContext} from 'react';
import FullWidthImageTextBanner from "components/FullWidthImageTextBanner";
import ColumnInfoImage from "components/ColumnInfoImage";
import FullWidthInfo from "components/FullWidthInfo";
import ImageSideText from "components/ImageSideText";
import BackImageFloatingContent from "components/BackImageFloatingContent";
import AppHead from "components/Layout/AppHead";
import {PageChangeContext} from "../../utils/pageChangeContext";
import Clickable from "components/Elements/Clickable";

const ShadowWork = () => {

    const columnInfoImage = [
        {
            title: 'CONSCIOUS & SUB-CONSCIOUS',
            description: 'The conscious is the aspect of ourselves that we are aware of, were as the subconscious is the aspect of ourselves that we are unaware of.',
            image: 'images/icons/conscious-and-sub.png',
        },
        {
            title: 'DENYING OUR FEELINGS',
            description: 'We learn to deny our feelings consciously over and over again by rejecting and pushing that part of us into a place we cannot see, our subconscious.',
            image: 'images/icons/grief.png',
        },
        {
            title: 'BECOMING AWARE',
            description: 'To become aware of something you have to be able to see it. Shadow work makes you aware to the aspects that we rejected and pushed in our subconscious.',
            image: 'images/icons/aware.png',
        },
    ];
    const {pageScrollTarget, showBackToButton,clickedPageChangeScrollToPosition} = useContext(PageChangeContext);

    return (
        <>
            <AppHead
                title="- Shadow Work"
                description="WHAT IS THE HUMAN SHADOW? The human shadow is any aspect of a person that has not yet been exposed to the light of their consciousness."
                image="/images/shadow.webp"
            />
            <FullWidthImageTextBanner
                title="SHADOW WORK"
                backgroundImage="/images/shadow.webp"
                contentCenter
                alt
            />

            <ColumnInfoImage
                title="WHAT IS THE HUMAN SHADOW?"
                description="The human shadow is any aspect of a person that has not <br/>yet been exposed to their consciousness."
                data={columnInfoImage}
                headingLine
            />

            <BackImageFloatingContent
                backgroundImage="/images/pattern-back-4.png"
                title="Societal Socialising"
                headingLine
                backgroundFade
                curveBottom
            >
                <p className="body-copy">Growing up we all learn what aspect of ourselves is acceptable and what is not.
                    This is due to the social control technique of good behaviour equals reward, whilst bad behaviour
                    equals punishment and rejection. This social control technique is something that has existed since
                    the 1600's which every previous line of our family has gone through and been a victim
                    of. <br/><br/> The aspects of us that have been seen as unacceptable were rejected by our
                    caregivers. As a child being dependent on our social circle for survival, we learnt to push away
                    those aspects of ourselves that were deemed not acceptable, whilst simultaneously exaggerating the
                    aspects of us that are approved of by our caregivers, as they did for theirs, and so on. <br/> <br/>Being
                    completely dependant on our caregivers for survival, this behaviour became our coping mechanism.
                    This coping mechanism becomes our default way of being that we take into adulthood. By this point
                    our behaviour of rejecting the aspects of ourselves that is deemed not acceptable has become so
                    ingrained in us, that we no longer have a real concept of our most authentic self anymore.<br/>
                    <br/>The way we heal from this is to find those aspects of ourselves that we denied, rejected and
                    disowned from our subconscious and bring them to the light of our consciousness. We do this with
                    having unconditional love for those parts and opening up so that we can finally hear what they have
                    to say.</p>
            </BackImageFloatingContent>

            <div id="fragmentation">
                <ImageSideText
                    backgroundImage="/images/mirror.webp"
                    title="What Is Fragmentation?"
                    href="/shop"
                    cta_text="Online Shop"
                >
                    <p className="body-copy">Fragmentation is the primary coping mechanism for a physical
                        human.<br/><br/>We have an outdated definition of the meaning for trauma. We tend to define
                        trauma only when it’s the most extreme stuff a person has experienced. Such as mental or sexual
                        abuse, human trafficking or death in the family. Every single human has trauma. This means
                        everyone has fragmentation within their being.<br/><br/> As humans the way we cope with trauma
                        is that we dissociate. Every time we experience trauma (distress without resolve), your
                        consciousness splits into parts. And the way we cope is by burying those feelings deep in our
                        subconscious when the split occurs. In order to heal we must reintegrate those
                        fragments into our being. <br/> <br/> To learn more about shadow work, check out my online courses.</p>

                    {showBackToButton && <Clickable
                        onClick={() => clickedPageChangeScrollToPosition('/', 'external-validation', '')}
                        brandOne
                        className="go-back-clickable"
                    >
                        Go back to {pageScrollTarget.from}
                    </Clickable>}
                </ImageSideText>
            </div>

            <FullWidthInfo
                hTag={3}
                title="Good Or Bad?"
                description="As humans, we have the ability to hold beliefs. Everyone has their own beliefs. <br />There is no such things as good or bad. <br />Every action you take will be judged subjectively from another human, based on their own beliefs."
                headingLine
            />

        </>
    )
}

export default ShadowWork;