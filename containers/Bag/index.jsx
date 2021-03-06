import React, {useContext} from 'react';
import AppHead from "components/Layout/AppHead";
import BagPageWrapper from "components/BagPageWrapper";
import {PageChangeContext} from "../../utils/pageChangeContext";
import LoginRegisterForm from "components/LoginRegisterForm";
import PageNotFound from "components/PageNotFound";

const Bag = () => {

    // Data
    const {loggedIn} = useContext(PageChangeContext);

    // if (loggedIn) {
    //     return (
    //         <>
    //             <AppHead
    //                 title="Bag"
    //                 description="Bag Page"
    //                 image="/images/profile-4-mobile.webp"
    //             />
    //             <BagPageWrapper/>
    //         </>
    //     )
    // } else {
    //     return (<>
    //         <LoginRegisterForm />
    //     </>)
    // }

    return (<PageNotFound />);

}

export default Bag;