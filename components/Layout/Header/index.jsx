import React, {useEffect, useState} from 'react';
import Link from 'next/link'
import {Col, Container, Row} from "reactstrap";
import Nav from "components/Layout/Nav";
import BurgerButton from "components/Elements/BurgerButton";
import {useRouter} from "next/router";

const Header = (props) => {

    // Data
    const {showNav, setShowNav} = props;
    const router = useRouter();

    // States
    const [headerScroll, setHeaderScroll] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setHeaderScroll(window.scrollY);
        });
    }, []);

    return (<>
        <header className={`main-header ${headerScroll > 0 ? 'scroll-active' : ''} ${router.asPath === '/admin' ? 'admin' : ''}`}>
            <Container>
                <Row>
                    <Col xs={12} className="main-header-inner">
                        <Link href="/">
                            <a className="brand-logo">
                                <img src="/images/logo-single.svg" alt="Arian Samouie Life Coach" className="logo-image"/>
                                <spam className="logo-text">LIFE COACH / HEALER</spam>
                            </a>
                        </Link>
                        <Nav
                            showNav={showNav}
                            setShowNav={setShowNav}
                            className="desktop"
                        />
                        <BurgerButton
                            activeState={showNav}
                            setState={setShowNav}
                        />
                    </Col>
                </Row>
            </Container>
        </header>
        <Nav
            showNav={showNav}
            setShowNav={setShowNav}
        />
    </>)
}

export default Header;