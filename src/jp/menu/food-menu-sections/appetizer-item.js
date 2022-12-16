import React from "react";

const AppetizerItem = ({appetizer}) => {
    return (
        <li className="fs-5 mb-2">
            {/* appetizer name */}
            {appetizer.name}

            {/* price */}
            <div className="float-end">
                {
                    appetizer.smallSize &&
                    <>
                        <span className="ms-5 me-2">
                           ({appetizer.smallSize}) {appetizer.smallPrice}
                        </span>
                        <span className="ms-2">
                            ({appetizer.largeSize}) {appetizer.largePrice}
                        </span>
                    </>
                }
                {
                    appetizer.price &&
                    <span className="ms-5">
                        {appetizer.price}
                    </span>
                }
            </div>

            {/* price note */}
            {
                appetizer.priceNote &&
                <div className="ms-4 mt-0 fs-6 fst-italic">
                    {appetizer.priceNote}
                </div>
            }

            {/* food note */}
            {
                appetizer.note &&
                <div className="ms-4 mt-0 fs-6 fst-italic">
                    {appetizer.note}
                </div>
            }
        </li>
    );
};
export default AppetizerItem;