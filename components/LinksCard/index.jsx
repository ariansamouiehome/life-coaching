import React from 'react';
import Link from 'next/link';

const LinksCard = ({
       href,
       external,
       icon,
       title
   }) => {

    return (
        <Link href={href}>
            <a className="links-card" target={external && '_blank'}>
                <div dangerouslySetInnerHTML={{ __html: icon }} className="links-card-image"/>
                <span className="links-title">{title}</span>
            </a>
        </Link>
    )
}

export default LinksCard;