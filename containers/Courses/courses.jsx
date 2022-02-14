import React from 'react';
import FullWidthImageTextBanner from "components/FullWidthImageTextBanner";
import AppHead from "components/Layout/AppHead";
import PageNotFound from "components/PageNotFound";
import ColumnInfoImage from "components/ColumnInfoImage";
import Clickable from "components/Elements/Clickable";
import BackImageFloatingContent from "components/BackImageFloatingContent";

const Courses = (props) => {

    if (props.data) {
        const {title, description, backgroundImage, card_description} = props.data;
        return (
            <>
                <AppHead
                    title={title}
                    description={description}
                    image="/images/courses.jpeg"
                />
                <FullWidthImageTextBanner
                    title={title}
                    description={card_description}
                    backgroundImage={backgroundImage}
                    contentCenter
                    alt
                    // href="/courses"
                    // cta_text="Back to courses"
                />

                <ColumnInfoImage
                    title="What is the goal?"
                    description={description}
                    headingLine
                    paddingBottom
                />

                <BackImageFloatingContent
                    backgroundImage="/images/pattern-back-4.png"
                    title="What is in this course?"
                    headingLine
                    curveBottom
                >
                    <p className="body-copy">W</p>
                </BackImageFloatingContent>
            </>
        )
    } else {
        return (
            <PageNotFound />
        )
    }
}

export default Courses;