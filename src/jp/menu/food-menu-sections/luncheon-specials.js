import React from "react";
import LuncheonSpecialItem from "./luncheon-special-item";
import luncheonSpecials from "../../../data/food-menu/luncheon-specials.json";

const LuncheonSpecials = () => {
    return (
        <>
            {/* title */}
            <h2 className="mt-5 mb-3 text-center">
                <span className="text-decoration-underline">Luncheon Specials</span>
                <div className="text-decoration-none fs-6">
                    Served Daily 11:00am - 3:00pm
                </div>
                <div className="text-decoration-none fs-6">
                    Served with Pork Fried Rice
                </div>
                <div className="text-decoration-none fs-6">
                    Extra Charge for Substitutions
                </div>
            </h2>

            {/* category items */}
            <ul className="list-group list-unstyled">
                {
                    luncheonSpecials.map(item => <LuncheonSpecialItem dish={item}/>)
                }
            </ul>
        </>
    );
};
export default LuncheonSpecials;