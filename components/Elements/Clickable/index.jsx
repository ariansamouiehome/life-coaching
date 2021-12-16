import React from 'react';
import Link from "next/link";

const Clickable = (props) => {

    const {href, toolTip, toolTipWidth, brandOne, className, onClick, loading, target} = props;

    const onClickFunction = (e) => {
        e.preventDefault();
        onClick();
    }

    const ATag = () => {
        return (
            <a className={`clickable ${brandOne ? 'brand-one' : ''} ${className || ''} ${loading ? 'loading' : ''}`}
               onClick={(e) => {
                   onClick && onClickFunction(e)
               }}
                target={target && '_blank' || null}
            >
                {props.children}
                {toolTip && <span className="clickable-tooltip" style={{width: toolTipWidth || 170}}>{toolTip}</span>}
            </a>
        )
    }

    return (href ? <Link href={href}>{ATag()}</Link> : ATag())
}

export default Clickable;