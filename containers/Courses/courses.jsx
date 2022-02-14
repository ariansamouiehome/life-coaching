import React from 'react';
import FullWidthImageTextBanner from "components/FullWidthImageTextBanner";
import AppHead from "components/Layout/AppHead";
import PageNotFound from "components/PageNotFound";
import ColumnInfoImage from "components/ColumnInfoImage";
import BackImageFloatingContent from "components/BackImageFloatingContent";
import CourseInterestForm from "components/CourseInterestForm";

const Courses = (props) => {

    if (props.data) {
        const {title, description, backgroundImage, card_description, courseList, comingSoon} = props.data;
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
                        description="This course is currently being created.<br /> If you are interested in taking this course please fill out your details and I will contact you when it is live.<br /> (Estimated Release Date - March 31st 2022)"
                    />

                    <CourseInterestForm
                        courseName={title}
                    />
                </>}


            </>
        )
    } else {
        return (
            <PageNotFound />
        )
    }
}

export default Courses;