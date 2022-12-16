import React from "react";
import ChopSueyChowMeinItem from "./chop-suey-chow-mein-item";
import chopSueyChowMein from "../../../data/food-menu/chop-suey-chow-mein.json";

const ChopSueyChowMein = () => {
    return (
        <>
            {/* title */}
            <h2 className="mt-5 mb-3 text-center">
                <span className="text-decoration-underline">Chop Suey / Chow Mein</span>
                <div className="text-decoration-none fs-6">
                    (Served with Crispy Noodle)
                </div>
            </h2>

            {/* category items */}
            <ul className="list-group list-unstyled">
                {
                    chopSueyChowMein.map(item => <ChopSueyChowMeinItem dish={item}/>)
                }
            </ul>
        </>
    );
};
export default ChopSueyChowMein;