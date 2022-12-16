import React from "react";

const ChefsSpecialtiesItem = ({dish}) => {
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
export default ChefsSpecialtiesItem;