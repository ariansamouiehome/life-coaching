import React from 'react';
import Button from "components/Elements/Button";

const BagItem = ({data, onClick, loading}) => {

    return (<div className="bag-item">
        <div className="item-info">
            <h3 className="bag-item-heading">{data.title}</h3>
            <span className="bag-item-price">£{data.price}</span>
        </div>
        <Button
            className="theme-button"
            onClick={onClick}
            loading={loading}
            danger
        >Delete</Button>
    </div>)
}

export default BagItem;