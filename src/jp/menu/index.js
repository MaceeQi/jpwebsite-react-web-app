import React from "react";
import {Link} from "react-router-dom";
import {Routes, Route, useLocation} from "react-router";
import FoodMenuComponent from "./food-menu";
import DrinksMenuComponent from "./drink-menu";

const Menu = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const active = paths[2];

    return (
        <div>
            {/* nav buttons to different parts of menu */}
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <Link to="/menus/food" className={`nav-link ${active === 'food' ? 'active' : ''}`}>
                        FOOD MENU
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/menus/drinks" className={`nav-link ${active === 'drinks' ? 'active' : ''}`}>
                        DRINKS MENU
                    </Link>
                </li>
            </ul>
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