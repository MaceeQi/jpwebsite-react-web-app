import React from "react";
import appetizers from "../../../data/food-menu/appetizers.json";
import AppetizerItem from "./appetizer-item";

const Appetizers = () => {
    return (
        <>
            {/* title - Appetizers */}
            <h2 className="mt-5 mb-3 text-decoration-underline text-center">
                Appetizers
            </h2>

            {/* appetizer items */}
            <ul className="list-group list-unstyled">
                {
                    appetizers.map(appetizer => <AppetizerItem appetizer={appetizer}/>)
                }
            </ul>
        </>
    );
};
export default Appetizers;