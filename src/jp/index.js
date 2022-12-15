import React from "react";
import NavigationBar from "./navigation-bar";
import HomeComponent from "./home";
import MenuComponent from "./menu";
import {Routes, Route} from "react-router";
import FindUsComponent from "./find-us";
import FooterComponent from "./footer";
import restaurant from "./reducers/restaurant-reducer";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";

const store = configureStore({
    reducer: {
        restaurant
    }
});

const JadePalace = () => {
    return (
        <Provider store={store}>
            <div>
                {/* Header */}
                <NavigationBar/>

                {/* Main Component */}
                <div>
                    <Routes>
                        <Route index element={<HomeComponent/>}/>
                        <Route path="menus/*" element={<MenuComponent/>}/>
                        <Route path="find-us" element={<FindUsComponent/>}/>
                    </Routes>
                </div>

                {/* Footer */}
                <FooterComponent/>
            </div>
        </Provider>
    );
};
export default JadePalace;