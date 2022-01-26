import React from 'react';

const Loader = (props) => {

    const {button, alt} = props

    return (
        <div className={`lds-ring ${button ? 'button' : ''} ${alt ? 'alt' : ''}`}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Loader;