import React from 'react';
import Link from 'next/link';

const CourseCard = ({data}) => {

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

export default CourseCard;