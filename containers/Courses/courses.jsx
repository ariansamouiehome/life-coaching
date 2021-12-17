import React from 'react';
import FullWidthImageTextBanner from "components/FullWidthImageTextBanner";
import AppHead from "components/Layout/AppHead";
import PageNotFound from "components/PageNotFound";

const Courses = (props) => {

    if (props.data) {
        const {title, description, backgroundImage} = props.data;
        return (
            <>
                <AppHead
                    title={title}
                    description={description}
                    image="/images/courses.jpeg"
                />
                <FullWidthImageTextBanner
                    title={title}
                    description={description}
                    backgroundImage={backgroundImage}
                    contentCenter
                    alt
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