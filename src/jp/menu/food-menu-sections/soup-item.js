import React from "react";

const SoupItem = ({soup}) => {
    return (
        <li className="fs-5 mb-2">
            {/* soup name */}
            {soup.name}

            {/* price */}
            <div className="float-end">
                <span className="ms-5">
                    {soup.price}
                </span>
            </div>
        </li>
    );
};
export default SoupItem;