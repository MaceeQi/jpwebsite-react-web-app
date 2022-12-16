import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import foodMenuContents from "../../data/food-menu-contents.json";
import Appetizers from "./food-menu-sections/appetizers";
import Soups from "./food-menu-sections/soups";
import Chicken from "./food-menu-sections/chicken";
import "./index.css";
import Seafood from "./food-menu-sections/seafood";
import Beef from "./food-menu-sections/beef";

const FoodMenuComponent = () => {

    return (
        <>
            {/* table of contents */}
            <div className="d-flex flex-wrap justify-content-center">
                {
                    foodMenuContents.map(content =>
                                             <Link to={`#${content}`} className="text-black m-2 ms-3 me-3">
                                                 {content}
                                             </Link> )
                }
            </div>

            {/* food menu */}
            <div className="d-flex flex-column align-items-center">
                {/* appetizers */}
                <div id="Appetizers">
                    <Appetizers/>
                </div>

                {/* beef */}
                <div id="Beef">
                    <Beef/>
                </div>

                {/* chef's specialties */}
                <div id="Chef's Specialties">
                    <h2 className="mt-5">Chef's Specialties</h2>
                </div>

                {/* chicken */}
                <div id="Chicken">
                    <Chicken/>
                </div>

                {/* chop suey / chow mein */}
                <div id="Chop Suey/Chow Mein">
                    <h2 className="mt-5">Chop Suey/Chow Mein</h2>
                </div>

                {/* combo plates */}
                <div id="Combination Plates">
                    <h2 className="mt-5">Combination Plates</h2>
                </div>

                {/* egg foo yong */}
                <div id="Egg Foo Yong">
                    <h2 className="mt-5">Egg Foo Yong</h2>
                </div>

                {/* family dinners */}
                <div id="Family Dinners">
                    <h2 className="mt-5">Family Dinners</h2>
                </div>

                {/* fried rice */}
                <div id="Fried Rice">
                    <h2 className="mt-5">Fried Rice</h2>
                </div>

                {/* house specialties */}
                <div id="House Specialties">
                    <h2 className="mt-5">House Specialties</h2>
                </div>

                {/* kiddy kombos */}
                <div id="Kiddy Kombos">
                    <h2 className="mt-5">Kiddy Kombos</h2>
                </div>

                {/* lunch specials */}
                <div id="Luncheon Specials">
                    <h2 className="mt-5">Luncheon Specials</h2>
                </div>

                {/* lo mein */}
                <div id="Lo Mein">
                    <h2 className="mt-5">Lo Mein</h2>
                </div>

                {/* moo shu */}
                <div id="Moo Shu">
                    <h2 className="mt-5">Moo Shu</h2>
                </div>

                {/* pork */}
                <div id="Pork">
                    <h2 className="mt-5">Pork</h2>
                </div>

                {/* rice noodle */}
                <div id="Rice Noodle">
                    <h2 className="mt-5">Rice Noodle</h2>
                </div>

                {/* seafood */}
                <div id="Seafood">
                    <Seafood/>
                </div>

                {/* soups */}
                <div id="Soups">
                    <Soups/>
                </div>

                {/* sweet and sour */}
                <div id="Sweet and Sour">
                    <h2 className="mt-5">Sweet and Sour</h2>
                </div>

                {/* szechuan cuisine */}
                <div id="Szechuan Cuisine">
                    <h2 className="mt-5">Szechuan Cuisine</h2>
                </div>

                {/* vegetarian */}
                <div id="Vegetarian">
                    <h2 className="mt-5">Vegetarian</h2>
                </div>
            </div>
        </>
    );
};
export default FoodMenuComponent;