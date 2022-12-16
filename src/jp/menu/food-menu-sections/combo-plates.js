import React from "react";
import ComboPlateItem from "./combo-plate-item";
import comboPlate from "../../../data/food-menu/combo-plates.json";

const ComboPlate = () => {
    return (
        <>
            {/* title */}
            <h2 className="mt-5 mb-3 text-center">
                <span className="text-decoration-underline">Combination Plates</span>
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
                    comboPlate.map(item => <ComboPlateItem dish={item}/>)
                }
            </ul>
        </>
    );
};
export default ComboPlate;