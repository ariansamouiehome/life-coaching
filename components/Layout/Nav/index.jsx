import React from 'react';
import {navItems} from "../../../utils/globalArrays";
import {useRouter} from 'next/router';
import Clickable from "components/Elements/Clickable";

const Nav = (props) => {

    const {className, showNav} = props;
    const router = useRouter();

    return (
        <nav className={`main-nav ${className ? className : ''} ${showNav ? 'active' : ''}`}>
            <ul className="nav-list">
                {navItems.map((item, key) => <li className="list-item" key={`nav-key-${key}`}>
                    <Clickable
                        href={item.link}
                        className={`item-link ${router.pathname === item.link ? 'active' : ''}`}
                        >
                        {item.title}
                    </Clickable>
                </li>)}
            </ul>
        </nav>
    )
}

export default Nav;