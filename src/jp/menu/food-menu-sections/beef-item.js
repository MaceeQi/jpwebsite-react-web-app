import React from "react";

const BeefItem = ({beef}) => {
    return (
        <li className="fs-5 mb-2">
            {/* beef name */}
            {beef.name}

            {/* price */}
            <div className="float-end">
                <span>
                    {beef.price}
                </span>
            </div>
        </li>
    );
};
export default BeefItem;