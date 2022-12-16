import React from "react";

const ChickenItem = ({chicken}) => {
    return (
        <li className="fs-5 mb-2">
            {/* chicken name */}
            {chicken.name}

            {/* price */}
            <div className="float-end">
                <span className="ms-5">
                    {chicken.price}
                </span>
            </div>
        </li>
    );
};
export default ChickenItem;