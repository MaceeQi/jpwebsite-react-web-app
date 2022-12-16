import React from "react";

const HouseSpecialtiesItem = ({dish}) => {
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

            {/* description */}
            {
                dish.description &&
                <div className="ms-4 mt-0 fs-6 fst-italic">
                    {dish.description}
                </div>
            }
        </li>
    );
};
export default HouseSpecialtiesItem;