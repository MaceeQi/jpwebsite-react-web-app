import React from "react";
import "./index.css";
import img from "../../images/jp.png"
import {useSelector} from "react-redux";
import NavBarMenuItems from "./menu-items";

const NavigationBar = () => {
    const restaurant = useSelector(state => state.restaurant);

    return (
        // <div className="jp-header-bg-color sticky-top">
        <div className="jp-header-bg-color">
            <li className="d-flex flex-wrap pt-4 pb-4 justify-content-center">
                {/* Column 1 - Logo */}
                <div className="d-flex align-items-center">
                    <img src={img} className="jp-logo jp-logo-border-color" alt=""/>
                </div>

                {/* Column 2 - Name */}
                <div className="ps-3 jp-font-color-red d-flex flex-column
                            justify-content-center align-items-start m-0">
                    <div className="jp-name-size">
                        {restaurant.name}
                    </div>
                    <div className="fs-5 jp-nudge-up">
                        CHINESE RESTAURANT & LOUNGE
                    </div>
                </div>

                <div className="ps-5 pe-5">
                </div>

                {/* Column 3 - Links to Pages */}
                <NavBarMenuItems/>
            </li>



            {/*<li className="d-flex pt-3 pb-4 align-items-center justify-content-center">*/}
            {/*    /!* Column 1 - Logo *!/*/}
            {/*    <div>*/}
            {/*        <img src={img} className="jp-logo jp-logo-border-color" alt=""/>*/}
            {/*    </div>*/}

            {/*    /!* Column 2 - Name *!/*/}
            {/*    <div className="col col-lg-5 ps-3 jp-font-color-red d-flex flex-column*/}
            {/*                justify-content-center align-items-start m-0">*/}
            {/*        <div className="jp-name-size">*/}
            {/*            {restaurant.name}*/}
            {/*        </div>*/}
            {/*        <div className="fs-5 jp-nudge-up">*/}
            {/*            CHINESE RESTAURANT & LOUNGE*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</li>*/}
            {/*<li className="d-flex">*/}
            {/*    /!* Column 3 - Links to Pages *!/*/}
            {/*    <NavBarMenuItems/>*/}
            {/*</li>*/}
        </div>
    );
};
export default NavigationBar;