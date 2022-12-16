import React from "react";
import EggFooYongItem from "./egg-foo-yong-item";
import eggFooYong from "../../../data/food-menu/egg-foo-yong.json";

const EggFooYong = () => {
    return (
        <>
            {/* title */}
            <h2 className="mt-5 mb-3 text-center">
                <span className="text-decoration-underline">Egg Foo Yong</span>
                <div className="text-decoration-none fs-6">
                    (Served with Gravy)
                </div>
            </h2>

            {/* category items */}
            <ul className="list-group list-unstyled">
                {
                    eggFooYong.map(item => <EggFooYongItem dish={item}/>)
                }
            </ul>
        </>
    );
};
export default EggFooYong;