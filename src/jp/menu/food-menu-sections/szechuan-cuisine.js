import React from "react";
import SzechuanCuisineItem from "./szechuan-cuisine-item";
import szechuanCuisine from "../../../data/food-menu/szechuan-cuisine.json";

const SzechuanCuisine = () => {
    return (
        <>
            {/* title */}
            <h2 className="mt-5 mb-3 text-center text-decoration-underline">
                Szechuan Cuisine
            </h2>

            {/* category items */}
            <ul className="list-group list-unstyled">
                {
                    szechuanCuisine.map(item => <SzechuanCuisineItem dish={item}/>)
                }
            </ul>
        </>
    );
};
export default SzechuanCuisine;