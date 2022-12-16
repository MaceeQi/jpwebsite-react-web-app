import React from "react";
import HouseSpecialtiesItem from "./house-specialties-item";
import houseSpecialties from "../../../data/food-menu/house-specialties.json";

const HouseSpecialties = () => {
    return (
        <>
            {/* title */}
            <h2 className="mt-5 mb-3 text-center text-decoration-underline">
                House Specialties
            </h2>

            {/* category items */}
            <ul className="list-group list-unstyled">
                {
                    houseSpecialties.map(item => <HouseSpecialtiesItem dish={item}/>)
                }
            </ul>
        </>
    );
};
export default HouseSpecialties;