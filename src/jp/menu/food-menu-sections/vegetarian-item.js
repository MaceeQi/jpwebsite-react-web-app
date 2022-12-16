import React from "react";

const VegetarianItem = ({vegetarian}) => {
    return (
        <li className="fs-5 mb-2">
            {/* vegetarian name */}
            {
                vegetarian.spicy &&
                <span className="text-danger">
                    *
                </span>
            }
            {vegetarian.name}

            {/* price */}
            <div className="float-end">
                <span>
                    {vegetarian.price}
                </span>
            </div>
        </li>
    );
};
export default VegetarianItem;