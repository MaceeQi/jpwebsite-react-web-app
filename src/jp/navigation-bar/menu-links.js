import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const MenuLinks = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const active = paths[1];

    return (
        <ul className="nav nav-pills w-100 d-flex justify-content-evenly">
            <li className="nav-item p-1">
                <Link to="/" className="nav-link">
                    <span className={`fs-5 ${active === '' ? 'active' : ''}`}>
                        Home
                    </span>
                </Link>
            </li>
            <li className="nav-item p-1">
                <Link to="/menus/food" className="nav-link">
                    <span className={`fs-5 ${active === 'menus' ? 'active' : ''}`}>
                        Menus
                    </span>
                </Link>
            </li>
            <li className="nav-item p-1">
                <Link to="/our-story" className="nav-link">
                    <span className={`fs-5 ${active === 'our-story' ? 'active' : ''}`}>
                        Our Story
                    </span>
                </Link>
            </li>
            <li className="nav-item p-1">
                <Link to="/gallery" className="nav-link">
                    <span className={`fs-5 ${active === 'gallery' ? 'active' : ''}`}>
                        Gallery
                    </span>
                </Link>
            </li>
            <li className="nav-item p-1">
                <Link to="/find-us" className="nav-link">
                    <span className={`fs-5 ${active === 'find-us' ? 'active' : ''}`}>
                        Find Us
                    </span>
                </Link>
            </li>
        </ul>
    );
};
export default MenuLinks;