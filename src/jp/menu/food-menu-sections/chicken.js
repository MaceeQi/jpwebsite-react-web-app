import React from "react";
import chicken from "../../../data/food-menu/chicken.json";
import ChickenItem from "./chicken-item";

const Chicken = () => {
    return (
        <>
            {/* title - Chicken */}
            <h2 className="mt-5 mb-3 text-decoration-underline text-center">
                Chicken
            </h2>

            {/* chicken items */}
            <ul className="list-group list-unstyled">
                {
                    chicken.map(chicken => <ChickenItem chicken={chicken}/>)
                }
            </ul>
        </>
    );
};
export default Chicken;