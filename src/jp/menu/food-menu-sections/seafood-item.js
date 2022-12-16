import React from "react";

const SeafoodItem = ({seafood}) => {
    return (
        <li className="fs-5 mb-2">
            {/* seafood name */}
            {
                seafood.spicy &&
                <span className="text-danger">
                    *
                </span>
            }
            {seafood.name}

            {/* price */}
            <div className="float-end">
                <span className="ms-4">
                    {seafood.price}
                </span>
            </div>
        </li>
    );
};
export default SeafoodItem;