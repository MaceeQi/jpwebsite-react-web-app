import React from "react";
import "./index.css";

const ContactComponent = () => {
    return (
        <>
            <div className="d-flex justify-content-center pt-5">
                <h1 className="fs-1">
                    - Contact Us -
                </h1>
            </div>
            <div className="row pt-5">
                <div className="col-5 ps-5">
                    {/* Hours */}
                    <li className="list-group-item d-flex">
                        <div className="fs-1">
                            <i className="bi bi-clock-fill"></i>
                        </div>
                        <div className="ps-5 fs-4 d-flex">
                            <div>
                                Sunday:<br/>
                                Monday:<br/>
                                Tuesday:<br/>
                                Wednesday:<br/>
                                Thursday:<br/>
                                Friday:<br/>
                                Saturday:<br/>
                            </div>
                            <div className="ps-4">
                                11:00a - 8:30p<br/>
                                3:00p - 8:30p<br/>
                                3:00p - 8:30p<br/>
                                11:00a - 8:30p<br/>
                                11:00a - 8:30p<br/>
                                11:00a - 8:30p<br/>
                                11:00a - 8:30p<br/>
                            </div>
                        </div>
                    </li>

                    {/* Address */}
                    <li className="list-group-item d-flex pt-5">
                        <div className="fs-1">
                            <i className="bi bi-house-heart-fill"></i>
                        </div>
                        <div className="ps-5 fs-4">
                            <a href="https://www.google.com/maps/place/Jade+Palace+Restaurant/@44.6527106,-70.152576,17z/data=!4m5!3m4!1s0x4cb19a5b8d41e5af:0x158bcc67a331b7b2!8m2!3d44.6527083!4d-70.1503929"
                               className="jp-remove-anchor-decoration">
                                Jade Palace<br/>
                                249 Wilton Rd.<br/>
                                Farmington, ME 04938
                            </a>
                        </div>
                    </li>

                    {/* Phone Number */}
                    <li className="list-group-item d-flex pt-5">
                        <div className="fs-1">
                            <i className="bi bi-telephone-fill"></i>
                        </div>
                        <div className="ps-5 fs-4">
                            (207) 778 - 2098
                        </div>
                    </li>
                </div>

                {/* Map */}
                <div className="col">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2838.2760901778374!2d-70.15257068446955!3d44.652710579099725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb19a5b8d41e5af%3A0x158bcc67a331b7b2!2sJade%20Palace%20Restaurant!5e0!3m2!1sen!2sus!4v1666040523558!5m2!1sen!2sus"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="jp-map-size border border-2"
                        title="JP Google Map"></iframe>
                </div>
            </div>
        </>
    );
};
export default ContactComponent;