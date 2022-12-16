import React from "react";

const ChopSueyChowMeinItem = ({dish}) => {
    return (
        <li className="fs-5 mb-2">
            {/* dish name */}
            {dish.name}

            {/* price */}
            <div className="float-end">
                {
                    dish.smallPrice &&
                    <>
                        <span className="ms-5 me-2">
                           <span className="fs-6">(small)</span> {dish.smallPrice}
                        </span>
                        <span className="ms-2">
                            <span className="fs-6">(large)</span> {dish.largePrice}
                        </span>
                    </>
                }
                {
                    dish.price &&
                    <span className="ms-4">
                        {dish.price}
                    </span>
                }
            </div>
        </li>
    );
};
export default ChopSueyChowMeinItem;