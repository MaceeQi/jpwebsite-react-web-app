import React from "react";
import "./index.css";

const FooterComponent = () => {
    return (
        <div className="row pb-4 pt-4 mt-5">
            <div className="col fs-3 d-flex justify-content-center">
                <a href="https://www.facebook.com/jadepalace04938"
                   className="jp-remove-anchor-decoration jp-fb-fg-color p-3">
                    <i className="bi bi-facebook"></i>
                </a>
                <a href="https://www.yelp.com/biz/jade-palace-restaurant-and-lounge-farmington-2"
                   className="jp-remove-anchor-decoration jp-yelp-fg-color p-3">
                    <i className="bi bi-yelp"></i>
                </a>
            </div>
        </div>
    );
};
export default FooterComponent;