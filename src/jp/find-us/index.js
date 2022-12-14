import React from "react";
import "./index.css";
import Hours from "../hours";
import {useSelector} from "react-redux";

const FindUsComponent = () => {
    // retrieve restaurant info from reducer
    const restaurant = useSelector(state => state.restaurant);

    return (
        <>
            <div className="d-flex justify-content-center pt-5">
                <h1 className="fs-2">
                    - Hours & Location -
                </h1>
            </div>
            <div className="row pt-5">
                <div className="col col-lg-5 ps-5">
                    {/* Address */}
                    <li className="list-group-item d-flex flex-wrap">
                        <div className="fs-2 me-4">
                            <i className="bi bi-house-heart-fill"></i>
                        </div>
                        <div className="fs-5">
                            <a href="https://www.google.com/maps/place/Jade+Palace+Restaurant/@44.6527106,-70.152576,17z/data=!4m5!3m4!1s0x4cb19a5b8d41e5af:0x158bcc67a331b7b2!8m2!3d44.6527083!4d-70.1503929"
                               className="jp-remove-anchor-decoration">
                                {restaurant.name}<br/>
                                {restaurant.address.street}<br/>
                                {restaurant.address.town}
                            </a>
                        </div>
                    </li>

                    {/* Phone Number */}
                    <li className="list-group-item d-flex pt-5 flex-wrap">
                        <div className="fs-3 me-4">
                            <i className="bi bi-telephone-fill"></i>
                        </div>
                        <div className="fs-5">
                            {restaurant.phone}
                        </div>
                    </li>

                    {/* Hours */}
                    <li className="list-group-item d-flex pt-5 flex-wrap">
                        <div className="fs-2 me-4">
                            <i className="bi bi-clock-fill"></i>
                        </div>
                        <div className="fs-5">
                            <Hours/>
                        </div>
                    </li>
                </div>

                {/* Map */}
                <div className="col-7 d-none d-lg-block">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2838.2760901778374!2d-70.15257068446955!3d44.652710579099725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb19a5b8d41e5af%3A0x158bcc67a331b7b2!2sJade%20Palace%20Restaurant!5e0!3m2!1sen!2sus!4v1666040523558!5m2!1sen!2sus"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="jp-map-size border border-2"
                        title="JP Google Map"></iframe>
                </div>
                <div className="d-flex d-block d-lg-none mt-5 ms-3">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2838.2760901778374!2d-70.15257068446955!3d44.652710579099725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb19a5b8d41e5af%3A0x158bcc67a331b7b2!2sJade%20Palace%20Restaurant!5e0!3m2!1sen!2sus!4v1666040523558!5m2!1sen!2sus"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="jp-map-size-row border border-2"
                        title="JP Google Map"></iframe>
                </div>
            </div>
        </>
    );
};
export default FindUsComponent;