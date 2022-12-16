import React from "react";
import FriedRiceItem from "./fried-rice-item";
import friedRice from "../../../data/food-menu/fried-rice.json";

const FriedRice = () => {
    return (
        <>
            {/* title */}
            <h2 className="mt-5 mb-3 text-center text-decoration-underline">
                Fried Rice
            </h2>

            {/* category items */}
            <ul className="list-group list-unstyled">
                {
                    friedRice.map(item => <FriedRiceItem dish={item}/>)
                }
            </ul>
        </>
    );
};
export default FriedRice;