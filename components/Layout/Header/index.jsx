import React, {useEffect, useState, useContext} from 'react';
import Link from 'next/link';
import {Col, Container, Row} from "reactstrap";
import Nav from "components/Layout/Nav";
import BurgerButton from "components/Elements/BurgerButton";
import {useRouter} from "next/router";
import {PageChangeContext} from "../../../utils/pageChangeContext";

const Header = (props) => {

    // Data
    const {showNav, setShowNav} = props;
    const router = useRouter();
    const {loggedIn, bag} = useContext(PageChangeContext);

    // States
    const [headerScroll, setHeaderScroll] = useState(0);
    const [showUserDropDown, setShowUserDropDown] = useState(false);

    // Functions
    const onClickUserButton = () => {
        setShowNav(false);
        setShowUserDropDown(!showUserDropDown);
    }

    // UseEffects
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setHeaderScroll(window.scrollY);
        });

        const handleRouteChange = (url) => {
            setShowUserDropDown(false);
        }
        router.events.on('routeChangeStart', handleRouteChange);
        return () => {
            router.events.off('routeChangeStart', handleRouteChange);
        }
    }, []);

    return (<>
        <header className={`main-header ${headerScroll > 0 ? 'scroll-active' : ''} ${router.asPath === '/admin' ? 'admin' : ''}`}>
            <Container>
                <Row>
                    <Col xs={12} className="main-header-inner">
                        <Link href="/">
                            <a className="brand-logo">
                                <img src="/images/logo-single.svg" alt="Arian Samouie Life Coach" className="logo-image"/>
                                <spam className="logo-text">HEALER / LIFE COACH</spam>
                            </a>
                        </Link>
                        <div className="nav-hold-wrapper">
                            <Nav
                                showNav={showNav}
                                setShowNav={setShowNav}
                                className="desktop"
                                setShowUserDropDown={setShowUserDropDown}
                            />
                            {/*<div className="user-wrapper">*/}
                            {/*    <button*/}
                            {/*        className={`user-button ${showUserDropDown ? 'active' :''}`}*/}
                            {/*        onClick={onClickUserButton}*/}
                            {/*    >*/}
                            {/*        <img src="/images/icons/user.png" alt="user" className="user-icon"/>*/}
                            {/*    </button>*/}
                            {/*    <div className={`user-drop-down ${showUserDropDown ? 'active' :''}`}>*/}
                            {/*        {loggedIn && <>*/}
                            {/*            <Link href="/login">*/}
                            {/*                <a className="user-drop-down-link">Account</a>*/}
                            {/*            </Link>*/}
                            {/*            <Link href="/login">*/}
                            {/*                <a className="user-drop-down-link">Logout</a>*/}
                            {/*            </Link>*/}
                            {/*        </>}*/}
                            {/*        {!loggedIn && <Link href="/login">*/}
                            {/*            <a className="user-drop-down-link">Login</a>*/}
                            {/*        </Link>}*/}
                            {/*    </div>*/}
                            {/*    */}
                            {/*</div>*/}
                            {/*<Link href="/bag">*/}
                            {/*    <a className="bag-icon-link">*/}
                            {/*        {loggedIn && bag.items.length !== 0 && <span className="back-icon-number">{bag.items.length}</span>}*/}
                            {/*        <img src="/images/icons/cart.png" alt="cart" className="bag-icon-image"/>*/}
                            {/*    </a>*/}
                            {/*</Link>*/}

                            <BurgerButton
                                activeState={showNav}
                                setState={setShowNav}
                                setShowUserDropDown={setShowUserDropDown}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
        <Nav
            showNav={showNav}
            setShowNav={setShowNav}
        />
        {showUserDropDown && <div className="background-click" onClick={() => setShowUserDropDown(false)}/>}
    </>)
}

export default Header;