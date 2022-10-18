import React from "react";
import img from "../../images/jp.png";
import "./index.css";

const FooterComponent = () => {
    return (
        <div className="row pb-4 pt-4">
            <div className="col-2">
                <img src={img} className="jp-logo jp-logo-border-color" alt=""/>
            </div>
            <div className="col">
                <p>
                    <h2>Hours</h2><br/>

                </p>
            </div>
        </div>
    );
};
export default FooterComponent;