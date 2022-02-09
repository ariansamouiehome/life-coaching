import React from 'react';

const ContextCard = (props) => {

    const {state, setState, heading} = props;

    return (
        <>
            <div className={`context-card-back ${state ? 'active' : ''}`} onClick={() => setState(false)}/>
            <div className={`context-card ${state ? 'active' : ''}`}>
                <div className="context-card-header">
                    <button
                        className="context-card-close"
                        onClick={() => setState(false)}
                    >
                        <img src="/images/icons/close.png" alt="close icon" className="close-icon"/>
                    </button>
                    <h3 className="context-card-heading">{heading}</h3>
                </div>
                <div className="context-card-body">
                    {props.children}
                </div>
            </div>
        </>
    )
}

export default ContextCard;