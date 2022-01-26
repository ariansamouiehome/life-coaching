import React from 'react';
import BackImageFloatingContent from "components/BackImageFloatingContent";

const PageNotFound = () => {

    return (<div className="page-not-found">
        <BackImageFloatingContent
            backgroundImage="/images/pattern-back-4.png"
            title="Oops. <br />Page not found."
            href="/"
            cta_text="home page"
            headingLine
            center
        >
            <p className="body-copy">
                The page you are looking for does not exist.<br/> Please make sure you have the correct name in the
                url.<br/><br/>
                Alternatively you can go to the home page.
            </p>
        </BackImageFloatingContent>
    </div>)
}

export default PageNotFound;