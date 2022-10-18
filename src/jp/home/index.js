import React from "react";
import {Link} from "react-router-dom";
import CarouselComponent from "../carousel";

const HomeComponent = () => {
    return (
        <>
            <div className="row">
                <CarouselComponent/>
            </div>

            {/* Cards - Dine In/Take Out/Delivery */}
            <div className="row pt-5">
                {/* Dine In */}
                <div className="col card m-4">
                    <img src={require("../../images/dine-in.jpeg")} className="card-img-top border rounded-4 mt-3" alt=""/>
                    <div className="card-body">
                        <h3 className="card-title d-flex justify-content-center fs-1">
                            Dine In
                        </h3>
                        <p className="card-text fs-5">
                            249 Wilton Rd.<br/>
                            Farmington, ME 04938 <br/>
                            Routes 2 & 4 - Next to Hannaford<br/>
                            <br/>
                            Call us at (207) 778-2098 for reservations!
                        </p>
                        <Link to="/" className="btn btn-primary d-flex justify-content-center">
                            Dine In Menu
                        </Link>
                    </div>
                </div>

                {/* Take Out */}
                <div className="col card m-4">
                    <img src="" className="card-img-top" alt=""/>
                    <div className="card-body">
                        <h3 className="card-title d-flex justify-content-center fs-1">
                            Take Out
                        </h3>
                        <p className="card-text fs-5">

                        </p>
                        <Link href="/" className="btn btn-primary d-flex justify-content-center">Take Out Menu</Link>
                    </div>
                </div>

                {/* Delivery */}
                <div className="col card m-4">
                    <img src="" className="card-img-top" alt=""/>
                    <div className="card-body">
                        <h3 className="card-title d-flex justify-content-center fs-1">
                            Delivery
                        </h3>
                        <p className="card-text fs-5">
                            We happily offer delivery through Downtown Delivery
                        </p>
                        <a href="https://www.downtowndelivery.me/r/41/restaurants/delivery/Chinese/Jade-Palace-Farmington"
                           className="btn btn-primary d-flex justify-content-center">Order Delivery</a>
                    </div>
                </div>
            </div>
        </>
    );
};
export default HomeComponent;