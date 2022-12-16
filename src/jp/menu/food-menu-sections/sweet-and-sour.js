import React from "react";
import SweetAndSourItem from "./sweet-and-sour-item";
import sweetAndSour from "../../../data/food-menu/sweet-and-sour.json";

const SweetAndSour = () => {
    return (
        <>
            {/* title */}
            <h2 className="mt-5 mb-3 text-center text-decoration-underline">
                Sweet and Sour
            </h2>

            {/* category items */}
            <ul className="list-group list-unstyled">
                {
                    sweetAndSour.map(item => <SweetAndSourItem dish={item}/>)
                }
            </ul>
        </>
    );
};
export default SweetAndSour;