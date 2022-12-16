import React from "react";
import ChefsSpecialtiesItem from "./chefs-specialties-item";
import chefsSpecialties from "../../../data/food-menu/chefs-specialties.json";

const Vegetarian = () => {
    return (
        <>
            {/* title */}
            <h2 className="mt-5 mb-3 text-decoration-underline text-center">
                Chef's Specialties
            </h2>

            {/* category items */}
            <ul className="list-group list-unstyled">
                {
                    chefsSpecialties.map(dish => <ChefsSpecialtiesItem dish={dish}/>)
                }
            </ul>
        </>
    );
};
export default Vegetarian;