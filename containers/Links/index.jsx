import React from 'react';
import BackImageFloatingContent from "components/BackImageFloatingContent";
import AppHead from "components/Layout/AppHead";
import Link from "next/link";
import {Col} from "reactstrap";
import ProfileSection from "components/ProfileSection";
import LinksCard from "components/LinksCard";
import {linkItems} from "../../utils/socialLinks";

const Links = () => {

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
            <ProfileSection image="/images/profile-pic-1.jpeg"/>
            <BackImageFloatingContent
                backgroundImage="/images/pattern-back-4.png"
                title="Links"
                headingLine
                large
                center
                noPaddTop
            >
                <div className="theme-row">
                    {linkItems.map((item, key) => <LinksCard
                        href={item.href}
                        external={item.external}
                        icon={item.icon}
                        title={item.title}
                    />)}
                </div>
            </BackImageFloatingContent>
        </>
    )
}

export default Links;