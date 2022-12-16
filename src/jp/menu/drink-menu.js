import React from "react";
import polynesianDrinks from "../../data/drinks-menu/polynesian-drinks.json";
import additionalDrinks from '../../data/drinks-menu/additional-drinks.json';
import wines from "../../data/drinks-menu/wines.json";
import beers from '../../data/drinks-menu/beers.json';
import nonAlcoholicDrinks from "../../data/drinks-menu/non-alcoholic-drinks.json";
import bottledDrinks from "../../data/drinks-menu/bottled-drinks.json";

const DrinksMenuComponent = () => {
    return (
        <div className="d-flex flex-wrap justify-content-center">
            {/* Polynesian Drinks */}
            <div className="ms-5 me-5">
                <h2 className="mt-5 mb-3 text-decoration-underline text-center">
                    Polynesian Drinks
                </h2>
                <ul className="list-group list-unstyled d-flex align-items-center justify-content-center">
                    {
                        polynesianDrinks.map(drink =>
                             <li className="fs-5 mb-2 text-wrap">
                                 {drink.name}
                             </li>
                        )
                    }
                </ul>
            </div>

            {/* Additional Drinks */}
            <div className="ms-5 me-5">
                <h2 className="mt-5 mb-3 text-decoration-underline text-center">
                    Additional Drinks
                </h2>
                <ul className="list-group list-unstyled d-flex align-items-center justify-content-center">
                    {
                        additionalDrinks.map(drink =>
                             <li className="fs-5 mb-2 text-wrap">
                                 {drink.name}
                             </li>
                        )
                    }
                </ul>
            </div>

            {/* Wines */}
            <div className="ms-5 me-5">
                <h2 className="mt-5 mb-3 text-decoration-underline text-center">
                    Wines
                </h2>
                <ul className="list-group list-unstyled d-flex align-items-center justify-content-center">
                    {
                        wines.map(drink =>
                             <li className="fs-5 mb-2 text-wrap">
                                 {drink.name}
                             </li>
                        )
                    }
                </ul>
            </div>

            {/* Bottled Beers */}
            <div className="ms-5 me-5">
                <h2 className="mt-5 mb-3 text-decoration-underline text-center">
                    Bottled Beers
                </h2>
                <ul className="list-group list-unstyled d-flex align-items-center justify-content-center">
                    {
                        beers.map(drink =>
                            <li className="fs-5 mb-2 text-wrap">
                                {drink.name}
                            </li>
                        )
                    }
                </ul>
            </div>

            {/* Non-Alcoholic Drinks */}
            <div className="ms-5 me-5">
                <h2 className="mt-5 mb-3 text-decoration-underline text-center">
                    Non-Alcoholic Drinks
                </h2>
                <ul className="list-group list-unstyled d-flex align-items-center justify-content-center">
                    {
                        nonAlcoholicDrinks.map(drink =>
                             <li className="fs-5 mb-2 text-wrap">
                                 {drink.name}
                             </li>
                        )
                    }
                </ul>
            </div>

            {/* Bottled Drinks */}
            <div className="ms-5 me-5">
                <h2 className="mt-5 mb-3 text-decoration-underline text-center">
                    Bottled Drinks
                </h2>
                <ul className="list-group list-unstyled d-flex">
                    {
                        bottledDrinks.map(drink =>
                             <li className="fs-5 mb-4">
                                 <span className="text-decoration-underline d-flex justify-content-center text-wrap">
                                     {drink.brand}:
                                 </span>
                                 {
                                     drink.drinks.map(type =>
                                        <div className="fs-5 d-flex justify-content-center text-wrap">
                                            {type}
                                        </div>
                                     )
                                 }
                             </li>
                        )
                    }
                </ul>
            </div>
        </div>
    );
};
export default DrinksMenuComponent;