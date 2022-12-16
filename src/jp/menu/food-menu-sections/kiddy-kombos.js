import React from "react";
import KiddyKomboItem from "./kiddy-kombo-item";
import kiddyKombos from "../../../data/food-menu/kiddy-kombos.json";
import kiddyKombosPrices from "../../../data/food-menu/kiddy-kombos-price.json";

const KiddyKombos = () => {
    return (
        <>
            {/* title */}
            <h2 className="mt-5 mb-3 text-center">
                <span className="text-decoration-underline">Kiddy Kombos</span>
                <div className="text-decoration-none fs-6">
                    Choice of French Fries or Pork Fried Rice
                </div>
            </h2>

            <div className="d-flex justify-content-around border-bottom border-secondary mb-3">
                <h5>
                    Lunch: ${kiddyKombosPrices.lunch}
                </h5>
                <h5>
                    Dinner: ${kiddyKombosPrices.dinner}
                </h5>
            </div>

            {/* category items */}
            <ul className="list-group list-unstyled">
                {
                    kiddyKombos.map(item => <KiddyKomboItem dish={item}/>)
                }
            </ul>
        </>
    );
};
export default KiddyKombos;