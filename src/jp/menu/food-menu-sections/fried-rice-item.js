import React from "react";

const FriedRiceItem = ({dish}) => {
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
                {
                    dish.smallPrice &&
                    <>
                        <span className="me-2">
                           <span className="fs-6">(sm)</span> {dish.smallPrice}
                        </span>
                        <span className="ms-2">
                            <span className="fs-6">(lg)</span> {dish.largePrice}
                        </span>
                    </>
                }
                {
                    dish.price &&
                    <span>
                        {dish.price}
                    </span>
                }
            </div>

            {/* food note */}
            {
                dish.description &&
                <div className="ms-4 mt-0 fs-6 fst-italic">
                    {dish.description}
                </div>
            }
        </li>
    );
};
export default FriedRiceItem;