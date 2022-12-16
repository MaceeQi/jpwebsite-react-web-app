import React from "react";
import VegetarianItem from "./vegetarian-item";
import vegetarian from "../../../data/food-menu/vegetarian.json";

const Vegetarian = () => {
    return (
        <>
            {/* title - Vegetarian */}
            <h2 className="mt-5 mb-3 text-decoration-underline text-center">
                Vegetarian
            </h2>

            {/* vegetarian items */}
            <ul className="list-group list-unstyled">
                {
                    vegetarian.map(vegetarian => <VegetarianItem vegetarian={vegetarian}/>)
                }
            </ul>
        </>
    );
};
export default Vegetarian;