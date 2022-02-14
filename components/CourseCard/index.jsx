import React from 'react';
import Link from 'next/link';

const CourseCard = ({data}) => {

    if (data.altCard) {
        return (
            <div className="coming-soon-card">
                <div className="coming-soon-card-image" style={{backgroundImage: `url('/images/pattern-back-3.png')`}}/>
                <p className="coming-soon-card-body">More Courses<br/>Coming Soon</p>
            </div>
        )
    } else {
        return (
            <Link href={`courses/${data.url}`}>
                <a className="courses-card">
                    <div className="card-image-wrapper">
                        <div className="card-image" style={{backgroundImage: `url(${data.backgroundImage})`}}/>
                    </div>
                    <div className="card-info">
                        <h3 className="card-heading">{data.title}</h3>
                        <p className="body-copy">{data.card_description}</p>
                    </div>
                </a>
            </Link>
        )
    }
}

export default CourseCard;