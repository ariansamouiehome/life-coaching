import React, {useContext, useState} from 'react';
import {Col, Container, Row} from "reactstrap";
import {PageChangeContext} from "../../utils/pageChangeContext";
import AlertMessage from "components/AlertMessage";
import Button from "components/Elements/Button";

const CheckoutPageWrapper = () => {

    // Data
    const {bag, setBag} = useContext(PageChangeContext);

    // State
    const [loading, setLoading] = useState(false);

    // Functions
    const submitPayment = (item) => {
        setLoading(true);

        // TODO remove when api is in
        setTimeout(() => {
            setLoading(false)
        },2000);
    };

    return (
        <Container fluid className="back-page-wrapper" data-aos>
            {bag.items.length === 0 && <Col xs={12} className="no-items-wrapper">
                <AlertMessage
                    message="There are no items in your bag"
                />
            </Col>}
            {bag.items.length !== 0 && <>
                <Col xs={12} className="inner-image"/>
                <Container>
                    <Row>
                        <Col xs={12} lg={8} className="inner-content">
                            <h1 className="bag-page-heading">Card Details</h1>


                        </Col>
                        <Col xs={12} lg={4} className="inner-content payments">
                            <h1 className="bag-page-heading">Total</h1>
                            <ul className="bag-page-price-list">
                                <li className="list-item">
                                    <p className="item-title">Items</p>
                                    <span className="item-value">{bag.items.length}</span>
                                </li>
                                <li className="list-item">
                                    <p className="item-title">Sub Total</p>
                                    <span className="item-value">£{bag.subTotal}</span>
                                </li>
                                <li className="list-item">
                                    <p className="item-title">VAT</p>
                                    <span className="item-value">£{bag.vat}</span>
                                </li>
                                <li className="list-item">
                                    <p className="item-title">Total</p>
                                    <span className="item-value">£{bag.total}</span>
                                </li>
                            </ul>
                            <Button
                                href="/bag"
                                className="back-button"
                                secondary
                                secondaryBorder
                                disabled={loading}
                            >Back to Bag</Button>
                            <Button
                                loading={loading}
                                onClick={submitPayment}
                            >Confirm and Pay</Button>
                        </Col>
                    </Row>
                </Container>
            </>}
        </Container>
    )
}

export default CheckoutPageWrapper;