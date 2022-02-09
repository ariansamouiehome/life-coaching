import React from 'react';

const ContextCard = (props) => {

    const {state, setState, heading} = props;

    return (
        <>
            <div className="context-card-back" />
            <div className={`context-card ${state ? 'active' : ''}`}>
                <div className="context-card-header">
                    <button></button>
                    <h3 className="card-header">{heading}</h3>
                </div>
                {props.children}
            </div>
        </>
    )
}

export default ContextCard;