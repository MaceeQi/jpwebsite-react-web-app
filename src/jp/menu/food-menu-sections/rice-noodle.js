import React from "react";
import RiceNoodleItem from "./rice-noodle-item";
import riceNoodle from "../../../data/food-menu/rice-noodle.json";

const RiceNoodle = () => {
    return (
        <>
            {/* title */}
            <h2 className="mt-5 mb-3 text-center text-decoration-underline">
                Rice Noodle
            </h2>

            {/* category items */}
            <ul className="list-group list-unstyled">
                {
                    riceNoodle.map(item => <RiceNoodleItem dish={item}/>)
                }
            </ul>
        </>
    );
};
export default RiceNoodle;