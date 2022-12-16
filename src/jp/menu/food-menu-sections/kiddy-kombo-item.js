import React from "react";

const KiddyKomboItem = ({dish}) => {
    return (
        <li className="fs-5 mb-2">
            {/* dish name */}
            {dish.name}
        </li>
    );
};
export default KiddyKomboItem;