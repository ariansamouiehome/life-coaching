import React from 'react';
import BackImageFloatingContent from "components/BackImageFloatingContent";
import AppHead from "components/Layout/AppHead";
import TestimonialCard from "components/TestimonialCard";
import Link from "next/link";
import {Col} from "reactstrap";
import ProfileSection from "components/ProfileSection";

const Links = () => {

    // Data
    const testimonials = [
        {
            name: 'Asli',
            message: 'This meditation helped me so much to calm my mind and detach from my thoughts. I loved Arians voice and guidance through the process with his open heart. Thank you so much, will definitely join again. 🙏',
        },
        {
            name: 'Jenni Wardell',
            message: 'Arian makes sure there is an ongoing conversation and makes you feel comfortable from the get go. Amazing process.',
        },
        {
            name: 'Taba Fard',
            message: 'I found the meditation very helpful and useful for someone like me who has always had negative thoughts. I will recommend it to my friends and family.',
        },
        {
            name: 'AR',
            message: 'Such a deeply relaxing meditation led by Arian who clearly has much insight and knowledge. The information he holds and his desire to enhance the lives of others will do much to advance society. Thank you.',
        },
        {
            name: 'Isaac Orr',
            message: 'I\'ve never felt more at ease with my mind and soul. Looking forward to attend another session, best meditation I\'ve experienced in years!',
        },
    ];

    return (
        <>
            <AppHead
                title=""
                description="BECOME THE MOST AUTHENTIC YOU. The further away we are from our most authentic self,<br /> the further away we are to healing"
                image="/images/profile-4-mobile.webp"
            />
            <Col xs={12} className="admin-panel-nav">
                <Link href="/">
                    <a className="admin-logo">
                        <img src="/images/logo-single.svg" alt="Arian Samouie Life Coach"
                             className="admin-logo-image"/>
                    </a>
                </Link>
            </Col>
            <ProfileSection image="" />
            <BackImageFloatingContent
                backgroundImage="/images/pattern-back-4.png"
                title="Links"
                headingLine
                large
                center
                noPaddTop
            >
                <div className="theme-row">

                </div>
            </BackImageFloatingContent>
        </>
    )
}

export default Links;