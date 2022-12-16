import React from "react";
import loMein from "../../../data/food-menu/lo-mein.json";
import LoMeinItem from "./lo-mein-item";

const LoMein = () => {
    return (
        <>
            {/* title */}
            <h2 className="mt-5 mb-3 text-center">
                <span className="text-decoration-underline">Lo Mein</span>
                <div className="text-decoration-none fs-6">
                    (Soft Egg Noodles)
                </div>
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