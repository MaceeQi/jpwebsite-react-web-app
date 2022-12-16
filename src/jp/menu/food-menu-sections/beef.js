import React from "react";
import BeefItem from "./beef-item";
import beef from '../../../data/food-menu/beef.json';

const Beef = () => {
    return (
        <>
            {/* title - Beef */}
            <h2 className="mt-5 mb-3 text-decoration-underline text-center">
                Beef
            </h2>

            {/* seafood items */}
            <ul className="list-group list-unstyled">
                {
                    beef.map(beef => <BeefItem beef={beef}/>)
                }
            </ul>
        </>
    );
};
export default Beef;