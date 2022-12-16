import React from "react";
import loMein from "../../../data/food-menu/lo-mein.json";
import LoMeinItem from "./lo-mein-item";

const LoMein = () => {
    return (
        <>
            {/* title */}
            <h2 className="mt-5 mb-3 text-decoration-underline text-center">
                Lo Mein
            </h2>

            {/* category items */}
            <ul className="list-group list-unstyled">
                {
                    loMein.map(item => <LoMeinItem dish={item}/>)
                }
            </ul>
        </>
    );
};
export default LoMein;