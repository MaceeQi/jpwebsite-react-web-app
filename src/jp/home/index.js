import React from "react";
import {Link} from "react-router-dom";
import CarouselComponent from "../carousel";
import FindUsComponent from "../find-us";
import "./index.css";
import restaurant from "../../data/restaurant.json";

const HomeComponent = () => {
    return (
        <>
            {/* Photos Carousel */}
            <div className="row">
                {/*<CarouselComponent/>*/}
            </div>

            {/* Cards - Dine In/Take Out/Delivery */}
            <div className="row pt-5">
                {/* Dine In */}
                <div className="col card m-4 jp-card-color">
                    <img src={require("../../images/dine-in.jpeg")} className="card-img-top border rounded-4 mt-3" alt=""/>
                    <div className="card-body d-flex flex-column">
                        <h3 className="card-title d-flex justify-content-center fs-1 text-decoration-underline">
                            Dine In
                        </h3>
                        <p className="card-text fs-5 text-center mt-auto">
                            249 Wilton Rd.<br/>
                            Farmington, ME 04938 <br/>
                            Routes 2 & 4 - Next to Hannaford<br/>
                            <br/>
                            Call us at (207) 778-2098 for reservations!
                        </p>
                        <Link to="/" className="btn btn-primary mt-auto d-flex justify-content-center fs-5">
                            Dine In Menu
                        </Link>
                    </div>
                </div>

                {/* Take Out */}
                <div className="col card m-4 jp-card-color">
                    <img src={require("../../images/dine-in.jpeg")} className="card-img-top border rounded-4 mt-3" alt=""/>
                    <div className="card-body d-flex flex-column">
                        <h3 className="card-title d-flex justify-content-center fs-1 text-decoration-underline">
                            Take Out
                        </h3>
                        <p className="card-text fs-5 text-center mt-auto">
                            Call us at (207) 778-2098 to place an order<br/>
                            <br/>
                            * TAKE OUT ONLY SPECIAL *<br/>
                            Order $75+ and get a free 2 liter soda<br/>
                            <span className="jp-small-font">Subject to availability</span>
                        </p>
                        <Link href="/" className="btn btn-primary mt-auto d-flex justify-content-center fs-5">
                            Take Out Menu
                        </Link>
                    </div>
                </div>

                {/* Delivery */}
                <div className="col card m-4 jp-card-color">
                    <img src={require("../../images/dine-in.jpeg")} className="card-img-top border rounded-4 mt-3" alt=""/>
                    <div className="card-body d-flex flex-column">
                        <h3 className="card-title d-flex justify-content-center fs-1 text-decoration-underline">
                            Delivery
                        </h3>
                        <p className="card-text fs-5 text-center mt-auto">
                            We happily offer delivery through Downtown Delivery
                        </p>
                        <a href="https://www.downtowndelivery.me/r/41/restaurants/delivery/Chinese/Jade-Palace-Farmington"
                           className="btn btn-primary mt-auto d-flex justify-content-center fs-5">
                            Order Delivery
                        </a>
                    </div>
                </div>
            </div>

            {/* Hours & Location */}
            <div className="row">
                <FindUsComponent restaurant={restaurant}/>
            </div>
        </>
    );
};
export default HomeComponent;