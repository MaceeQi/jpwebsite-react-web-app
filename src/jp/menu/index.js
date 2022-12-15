import React from "react";
import {Link} from "react-router-dom";
import {Routes, Route, useLocation} from "react-router";
import FoodMenuComponent from "./food-menu";
import DrinksMenuComponent from "./drink-menu";
import "./index.css";

const Menu = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const active = paths[2];

    return (
        <div>
            {/* nav buttons to different parts of menu */}
            <div className="d-flex justify-content-center">
                <ul className="nav nav-pills">
                    <li className="nav-item jp-menu-color m-3">
                        <Link to="/menus/food" className={`nav-link ps-5 pe-5 
                                                           ${active === 'food' ? 'active' : ''}`}>
                            FOOD MENU
                        </Link>
                    </li>
                    <li className="nav-item m-3 jp-menu-color">
                        <Link to="/menus/drinks" className={`nav-link ps-5 pe-5 
                                                           ${active === 'drinks' ? 'active' : ''}`}>
                            DRINK MENU
                        </Link>
                    </li>
                </ul>
            </div>

            <div>
                <Routes>
                    <Route path="food" element={<FoodMenuComponent/>}/>
                    <Route path="drinks" element={<DrinksMenuComponent/>}/>
                </Routes>
            </div>
        </div>
    );
};
export default Menu;