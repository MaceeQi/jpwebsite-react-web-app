import React from "react";
import soups from "../../../data/food-menu/soups.json";
import SoupItem from "./soup-item";

const Soups = () => {
    return (
        <>
            {/* title - Soups */}
            <h2 className="mt-5 mb-3 text-decoration-underline text-center">
                Soups
            </h2>

            {/* soup items */}
            <ul className="list-group list-unstyled">
                {
                    soups.map(soup => <SoupItem soup={soup}/>)
                }
            </ul>
        </>
    );
};
export default Soups;