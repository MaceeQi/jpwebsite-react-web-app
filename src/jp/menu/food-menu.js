import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import foodMenuContents from "../../data/food-menu-contents.json";
import Appetizers from "./food-menu-sections/appetizers";
import Soups from "./food-menu-sections/soups";
import Chicken from "./food-menu-sections/chicken";
import "./index.css";
import Seafood from "./food-menu-sections/seafood";
import Beef from "./food-menu-sections/beef";
import Pork from "./food-menu-sections/pork";
import Vegetarian from "./food-menu-sections/vegetarian";
import ChefsSpecialties from "./food-menu-sections/chefs-specialties";
import LoMein from "./food-menu-sections/lo-mein";
import ChopSueyChowMein from "./food-menu-sections/chop-suey-chow-mein";
import MooShu from "./food-menu-sections/moo-shu";
import HouseSpecialtiesItem from "./food-menu-sections/house-specialties-item";
import HouseSpecialties from "./food-menu-sections/house-specialties";
import SzechuanCuisine from "./food-menu-sections/szechuan-cuisine";
import RiceNoodle from "./food-menu-sections/rice-noodle";
import SweetAndSour from "./food-menu-sections/sweet-and-sour";
import FriedRice from "./food-menu-sections/fried-rice";
import ComboPlate from "./food-menu-sections/combo-plates";

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
            <div className="row">
                <div className="col-lg-6 p-5">
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
                        <ChefsSpecialties/>
                    </div>

                    {/* chicken */}
                    <div id="Chicken">
                        <Chicken/>
                    </div>

                    {/* chop suey / chow mein */}
                    <div id="Chop Suey / Chow Mein">
                        <ChopSueyChowMein/>
                    </div>

                    {/* combo plates */}
                    <div id="Combination Plates">
                        <ComboPlate/>
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
                        <FriedRice/>
                    </div>
                </div>

                <div className="col-lg-6 p-5">
                    {/* house specialties */}
                    <div id="House Specialties">
                        <HouseSpecialties/>
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
                        <LoMein/>
                    </div>

                    {/* moo shu */}
                    <div id="Moo Shu">
                        <MooShu/>
                    </div>

                    {/* pork */}
                    <div id="Pork">
                        <Pork/>
                    </div>

                    {/* rice noodle */}
                    <div id="Rice Noodle">
                        <RiceNoodle/>
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
                        <SweetAndSour/>
                    </div>

                    {/* szechuan cuisine */}
                    <div id="Szechuan Cuisine">
                        <SzechuanCuisine/>
                    </div>

                    {/* vegetarian */}
                    <div id="Vegetarian">
                        <Vegetarian/>
                    </div>
                </div>
            </div>
        </>
    );
};
export default FoodMenuComponent;