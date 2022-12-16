import React from "react";
import FamilyDinnerItem from "./family-dinner-item";
import familyDinners from "../../../data/food-menu/family-dinners.json";

const ComboPlate = () => {
    return (
        <>
            {/* title */}
            <h2 className="mt-5 mb-3 text-center">
                <span className="text-decoration-underline">Family Dinners</span>
                <div className="text-decoration-none fs-6">
                    Choice of Wonton or Hot & Sour Soup
                </div>
            </h2>

            {/* category items */}
            <ul className="list-group list-unstyled">
                {
                    familyDinners.map(item => <FamilyDinnerItem dish={item}/>)
                }
            </ul>
        </>
    );
};
export default ComboPlate;