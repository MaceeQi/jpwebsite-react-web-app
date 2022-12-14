import React from "react";

const PorkItem = ({pork}) => {
    return (
        <li className="fs-5 mb-2">
            {/* pork name */}
            {pork.name}

            {/* price */}
            <div className="float-end">
                <span>
                    {pork.price}
                </span>
            </div>
        </li>
    );
};
export default PorkItem;