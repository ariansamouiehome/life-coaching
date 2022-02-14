import React from 'react';
import FullWidthImageTextBanner from "components/FullWidthImageTextBanner";
import AppHead from "components/Layout/AppHead";
import PageNotFound from "components/PageNotFound";
import ColumnInfoImage from "components/ColumnInfoImage";
import BackImageFloatingContent from "components/BackImageFloatingContent";
import CourseInterestForm from "components/CourseInterestForm";
import FullWidthInfo from "components/FullWidthInfo";

const Courses = (props) => {

    if (props.data) {
        const {title, description, backgroundImage, card_description, courseList, comingSoon, comingSoonDate} = props.data;
        return (
            <>
                <AppHead
                    title={title}
                    description={description}
                    image={backgroundImage}
                />
                <FullWidthImageTextBanner
                    title={title}
                    description={card_description}
                    backgroundImage={backgroundImage}
                    contentCenter
                    alt
                />

                <ColumnInfoImage
                    title="What is the goal?"
                    description={description}
                    headingLine
                    paddingBottom
                />

                <BackImageFloatingContent
                    backgroundImage="/images/pattern-back-4.png"
                    title="What Is Covered In This Course?"
                    headingLine
                    curveBottom
                >
                    <ul className="courses-list">
                        {courseList.map((item, key) =>
                        <li className="list-item" key={`course-list-key-${key}`}>{item}</li>)}
                    </ul>
                </BackImageFloatingContent>

                {comingSoon && <>
                    <ColumnInfoImage
                        noCurve
                        title="Interested in this course?"
                        description={`This course is currently being created.<br /> If you are interested in taking this course please fill out your details and I will contact you when it is live.<br /> (Estimated Release Date - ${comingSoonDate})`}
                    />

                    <CourseInterestForm
                        courseName={title}
                    />
                </>}

                <FullWidthInfo
                    hTag={3}
                    title="Courses"
                    // description="Join my FREE online healing meditation sessions."
                    cta_show
                    cta_href="/courses"
                    cta_text="Back to courses"
                    headingLine
                />

            </>
        )
    } else {
        return (
            <PageNotFound />
        )
    }
}

export default Courses;