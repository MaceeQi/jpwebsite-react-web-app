import React from "react";

const LunchComboPlateItem = ({dish}) => {
    return (
        <li className="fs-5 mb-2">
            {/* dish name */}
            {
                dish.spicy &&
                <span className="text-danger">
                    *
                </span>
            }
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
export default LunchComboPlateItem;