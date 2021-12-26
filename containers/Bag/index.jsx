import React, {useContext} from 'react';
import AppHead from "components/Layout/AppHead";
import BagPageWrapper from "components/BagPageWrapper";
import {PageChangeContext} from "../../utils/pageChangeContext";
import {useRouter} from "next/router";

const Bag = () => {

    // Data
    const {loggedIn} = useContext(PageChangeContext);
    const router = useRouter();

    const goToLoginPage = () => {
        router.push('/login');
    }

    return (
        <>
            <AppHead
                title="Bag"
                description="Bag Page"
                image="/images/profile-4-mobile.webp"
            />
            {loggedIn ? <BagPageWrapper/> : goToLoginPage()}
        </>
    )

}

export default Bag;