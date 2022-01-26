import React from 'react';

const BurgerButton = (props) => {

    // Data
    const {activeState, setState, setShowUserDropDown} = props;

    // Functions
    const onCLickBurgerButton = () => {
        setState(!activeState);
        setShowUserDropDown(false);
    };

    return (<button
            className={`burger-button ${activeState ? 'active' : ''}`}
            onClick={onCLickBurgerButton}
        >
            <span/>
            <span/>
            <span/>
        </button>)
}

export default BurgerButton;