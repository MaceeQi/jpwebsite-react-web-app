import React from "react";
import PorkItem from "./pork-item";
import pork from "../../../data/food-menu/pork.json";

const Pork = () => {
    return (
        <>
            {/* title - Pork */}
            <h2 className="mt-5 mb-3 text-decoration-underline text-center">
                Pork
            </h2>

            {/* pork items */}
            <ul className="list-group list-unstyled">
                {
                    pork.map(pork => <PorkItem pork={pork}/>)
                }
            </ul>
        </>
    );
};
export default Pork;