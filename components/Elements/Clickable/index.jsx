import React from 'react';
import Link from "next/link";

const Clickable = (props) => {

    const {href, toolTip, toolTipWidth, brandOne, className, onClick} = props

    return (
        <Link href={href}>
            <a className={`clickable ${brandOne ? 'brand-one' : ''} ${className || ''}`} onClick={onClick}>
                {props.children}
                {toolTip && <span className="clickable-tooltip" style={{width: toolTipWidth || 170}}>{toolTip}</span>}
            </a>
        </Link>
    )
}

export default Clickable;