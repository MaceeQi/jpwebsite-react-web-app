import React from "react";
import "./index.css";
import img from "../../images/jp.png"
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationBar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const active = paths[1];
    return (
        <div className="jp-header-bg-color sticky-top">
            <li className="d-flex pt-4 pb-4">
                {/* Column 1 - Logo */}
                <div>
                    <img src={img} className="jp-logo jp-logo-border-color" alt=""/>
                </div>

                {/* Column 2 - Name */}
                <div className="col-5 ps-3 jp-font-color-red d-flex flex-column
                            justify-content-center align-items-start">
                    <div className="jp-name-size">
                        Jade Palace
                    </div>
                    <div className="fs-5 jp-nudge-up">
                        CHINESE RESTAURANT & LOUNGE
                    </div>
                </div>

                {/* Column 3 - Links to Pages */}
                <div className="col-6 d-flex align-items-center flex-fill">
                    <ul className="nav nav-pills w-100 d-flex justify-content-between">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                            <span className={`fs-5 ${active === '' ? 'active' : ''}`}>
                                Home
                            </span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/menu" className="nav-link">
                            <span className={`fs-5 ${active === 'menu' ? 'active' : ''}`}>
                                Menu
                            </span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/our-story" className="nav-link">
                            <span className={`fs-5 ${active === 'our-story' ? 'active' : ''}`}>
                                Our Story
                            </span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/gallery" className="nav-link">
                            <span className={`fs-5 ${active === 'gallery' ? 'active' : ''}`}>
                                Gallery
                            </span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/find-us" className="nav-link">
                            <span className={`fs-5 ${active === 'find-us' ? 'active' : ''}`}>
                                Find Us
                            </span>
                            </Link>
                        </li>
                    </ul>

                </div>
            </li>
        </div>
    );
};
export default NavigationBar;