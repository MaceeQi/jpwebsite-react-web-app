import React from "react";
import MooShuItem from "./moo-shu-item";
import mooShu from "../../../data/food-menu/moo-shu.json";

const MooShu = () => {
    return (
        <>
            {/* title */}
            <h2 className="mt-5 mb-3 text-center">
                <span className="text-decoration-underline">Moo Shu</span>
                <div className="text-decoration-none fs-6">
                    (Served with 6 Pancakes. Extras are $1.00 each)
                </div>
            </h2>

            {/* category items */}
            <ul className="list-group list-unstyled">
                {
                    mooShu.map(item => <MooShuItem dish={item}/>)
                }
            </ul>
        </>
    );
};
export default MooShu;