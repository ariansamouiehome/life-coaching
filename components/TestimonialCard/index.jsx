import React from 'react';

const TestimonialCard = ({name, message}) => {

    return (
        <div className="testimonial-card">
            <div className="testimonial-card-name">
                <img src="/images/icons/user.png" alt="user icon" className="testimonial-card-image"/>
                <h4 className="testimonial-card-name-text">{name}</h4>
            </div>
            <div className="testimonial-card-message">
                <p className="body-copy">{message}</p>
            </div>
        </div>
    )
}

export default TestimonialCard;