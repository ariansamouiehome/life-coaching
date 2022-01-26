import React, {useContext} from 'react';
import AppHead from "components/Layout/AppHead";
import {PageChangeContext} from "../../utils/pageChangeContext";
import LoginRegisterForm from "components/LoginRegisterForm";
import CheckoutPageWrapper from "components/CheckoutPageWrapper";

const Checkout = () => {

    // Data
    const {loggedIn} = useContext(PageChangeContext);

    if (loggedIn) {
        return (
            <>
                <AppHead
                    title="Checkout"
                    description="Checkout Page"
                    image="/images/profile-4-mobile.webp"
                />
                <CheckoutPageWrapper />
            </>
        )
    } else {
        return (<>
            <LoginRegisterForm />
        </>)
    }

}

export default Checkout;