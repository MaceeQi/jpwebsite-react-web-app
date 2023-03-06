import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const DiningOptions = () => {
    const restaurant = useSelector(state => state.restaurant);

    return (
        <>
            {/* Dine In */}
            <div className="flex-fill col-6 col-sm-4 col-lg-3 m-2 border border-2
                            rounded-4 d-flex flex-column jp-card-bg-light-beige">
                <div className="d-flex justify-content-center">
                    <img src="/images/dine-in.png"
                         className="mt-2 rounded-4 jp-avatar" alt=""/>
                </div>

                <div className="mt-2 mb-4">
                    <h1 className="fs-2 text-center text-wrap text-break mt-2 mb-3">
                        Dine In
                    </h1>
                    <div className="text-center fs-5 mt-auto">
                        {/*{restaurant.name}<br/>*/}
                        {/*{restaurant.address.street} <br/>*/}
                        {/*{restaurant.address.town} <br/>*/}
                        {/*{restaurant.address.location}<br/>*/}
                        {/*<br/>*/}
                        Call us at {restaurant.phone} for reservations!
                    </div>
                </div>
                <Link to="/menus/food" className="btn btn-primary mt-auto d-flex justify-content-center
                                        fs-5 m-4">
                    Dine In Menu
                </Link>
            </div>

            {/* Take Out */}
            <div className="flex-fill col-6 col-sm-4 col-lg-3 m-2 border border-2 rounded-4 d-flex flex-column">
                <div className="d-flex justify-content-center">
                    <img src="/images/exterior.png"
                         className="mt-2 rounded-4 jp-avatar" alt=""/>
                </div>

                <div className="mt-2 mb-4">
                    <h1 className="fs-2 text-center text-wrap text-break mt-2 mb-3">
                        Take Out
                    </h1>
                    <div className="text-center fs-5 mt-auto">
                        {/*Call us at {restaurant.phone} to place an order<br/>*/}
                        {/*<br/>*/}
                        ~ TAKE OUT ONLY SPECIAL ~<br/>
                        Order $75+ and get a free 2 liter soda<br/>
                        <span className="jp-small-font">Subject to availability</span>
                    </div>
                </div>
                <Link to="/menus/food" className="btn btn-primary mt-auto d-flex justify-content-center
                                          fs-5 m-4">
                    Take Out Menu
                </Link>
            </div>

            {/* Delivery */}
            <div className="flex-fill col-6 col-sm-4 col-lg-3 m-2 border border-2 rounded-4 d-flex flex-column">
                <div className="d-flex justify-content-center">
                    <img src="/images/sign.png"
                         className="mt-2 jp-avatar rounded-4" alt=""/>
                </div>

                <div className="mt-2 mb-4">
                    <h1 className="fs-2 text-center text-wrap text-break mt-2 mb-3">
                        Delivery
                    </h1>
                    <div className="text-center fs-5 mt-auto">
                        We partner with the following services for delivery:
                    </div>
                </div>
                <a href="https://www.downtowndelivery.me/r/41/restaurants/delivery/Chinese/Jade-Palace-Farmington"
                   className="btn btn-primary mt-auto d-flex justify-content-center fs-5 m-4">
                    Downtown Delivery
                </a>
                <a href="https://www.doordash.com/store/jade-palace-restaurant-farmington-24765608/"
                   className="btn btn-primary mt-auto d-flex justify-content-center fs-5 m-4">
                    DoorDash
                </a>
            </div>
        </>
    );
};

export default DiningOptions;