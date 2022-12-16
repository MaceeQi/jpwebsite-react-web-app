import React from "react";

const EggFooYongItem = ({dish}) => {
    return (
        <li className="fs-5 mb-2">
            {/* dish name */}
            {dish.name}

            {/* price */}
            <div className="float-end">
                <span>
                    {dish.price}
                </span>
            </div>
        </li>
    );
};
export default EggFooYongItem;