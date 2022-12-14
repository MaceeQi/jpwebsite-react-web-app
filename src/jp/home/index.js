import React from "react";
import {Link} from "react-router-dom";
import CarouselComponent from "../carousel";
import FindUsComponent from "../find-us";
import "./index.css";
import {useSelector} from "react-redux";

const HomeComponent = () => {
    // retrieve data from restaurant reducer
    const restaurant = useSelector(state => state.restaurant);

    return (
        <>
            {/* Photos Carousel */}
            <div className="d-flex justify-content-center align-items-center mt-5">
                <CarouselComponent/>
            </div>

            {/* Cards - Dine In/Take Out/Delivery */}
            {/*<div className="row pt-5">*/}
            {/*    /!* Dine In *!/*/}
            {/*    <div className="col card m-4 jp-card-color">*/}
            {/*        <img src={require("../../images/dine-in.jpeg")} className="card-img-top border rounded-4 mt-3" alt=""/>*/}
            {/*        <div className="card-body d-flex flex-column">*/}
            {/*            <h3 className="card-title d-flex justify-content-center fs-1 text-decoration-underline">*/}
            {/*                Dine In*/}
            {/*            </h3>*/}
            {/*            <p className="card-text fs-5 text-center mt-auto">*/}
            {/*                {restaurant.name}<br/>*/}
            {/*                {restaurant.address.street} <br/>*/}
            {/*                {restaurant.address.town} <br/>*/}
            {/*                {restaurant.address.location}<br/>*/}
            {/*                <br/>*/}
            {/*                Call us at {restaurant.phone} for reservations!*/}
            {/*            </p>*/}
            {/*            <Link to="/" className="btn btn-primary mt-auto d-flex justify-content-center fs-5">*/}
            {/*                Dine In Menu*/}
            {/*            </Link>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    /!* Take Out *!/*/}
            {/*    <div className="col card m-4 jp-card-color">*/}
            {/*        <img src={require("../../images/dine-in.jpeg")} className="card-img-top border rounded-4 mt-3" alt=""/>*/}
            {/*        <div className="card-body d-flex flex-column">*/}
            {/*            <h3 className="card-title d-flex justify-content-center fs-1 text-decoration-underline">*/}
            {/*                Take Out*/}
            {/*            </h3>*/}
            {/*            <p className="card-text fs-5 text-center mt-auto">*/}
            {/*                Call us at {restaurant.phone} to place an order<br/>*/}
            {/*                <br/>*/}
            {/*                * TAKE OUT ONLY SPECIAL *<br/>*/}
            {/*                Order $75+ and get a free 2 liter soda<br/>*/}
            {/*                <span className="jp-small-font">Subject to availability</span>*/}
            {/*            </p>*/}
            {/*            <Link href="/" className="btn btn-primary mt-auto d-flex justify-content-center fs-5">*/}
            {/*                Take Out Menu*/}
            {/*            </Link>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    /!* Delivery *!/*/}
            {/*    <div className="col card m-4 jp-card-color">*/}
            {/*        <img src={require("../../images/dine-in.jpeg")} className="card-img-top border rounded-4 mt-3" alt=""/>*/}
            {/*        <div className="card-body d-flex flex-column">*/}
            {/*            <h3 className="card-title d-flex justify-content-center fs-1 text-decoration-underline">*/}
            {/*                Delivery*/}
            {/*            </h3>*/}
            {/*            <p className="card-text fs-5 text-center mt-auto">*/}
            {/*                We happily offer delivery through Downtown Delivery*/}
            {/*            </p>*/}
            {/*            <a href="https://www.downtowndelivery.me/r/41/restaurants/delivery/Chinese/Jade-Palace-Farmington"*/}
            {/*               className="btn btn-primary mt-auto d-flex justify-content-center fs-5">*/}
            {/*                Order Delivery*/}
            {/*            </a>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/* Hours & Location */}
            <div className="row">
                {/*<a name="find-us"></a>*/}
                <FindUsComponent/>
            </div>
        </>
    );
};
export default HomeComponent;