import React from "react";
import LunchComboPlateItem from "./lunch-combo-plate-item";
import lunchComboPlate from "../../../data/food-menu/lunch-combo-plates.json";

const LunchComboPlates = () => {
    return (
        <>
            {/* title */}
            <h2 className="mt-5 mb-3 text-center">
                <span className="text-decoration-underline">Lunch Combination Plates</span>
                <div className="text-decoration-none fs-6">
                    Extra Charge for Substitutions
                </div>
                <div className="text-decoration-none fs-6">
                    Served with Pork Fried Rice or White Rice
                </div>
                <div className="text-decoration-none fs-6">
                    Add to Combo +$2.50: Egg Roll (1), Chicken Wings (3), Chicken Fingers (3), Crab Rangoons (3)
                </div>
                <div className="text-decoration-none fs-6">
                    Add to Combo +$4: Beef Teriyaki (2), Chicken Teriyaki (2), Vegetable Spring Roll (1), Cheese Wontons (3), Boneless Ribs
                </div>
            </h2>

            {/* category items */}
            <ul className="list-group list-unstyled">
                {
                    lunchComboPlate.map(item => <LunchComboPlateItem dish={item}/>)
                }
            </ul>
        </>
    );
};
export default LunchComboPlates;