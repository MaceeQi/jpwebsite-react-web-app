import React from "react";
import SeafoodItem from "./seafood-item";
import seafood from "../../../data/food-menu/seafood.json";

const Seafood = () => {
    return (
        <>
            {/* title - Seafood */}
            <h2 className="mt-5 mb-3 text-decoration-underline text-center">
                Seafood
            </h2>

            {/* seafood items */}
            <ul className="list-group list-unstyled">
                {
                    seafood.map(seafood => <SeafoodItem seafood={seafood}/>)
                }
            </ul>
        </>
    );
};
export default Seafood;