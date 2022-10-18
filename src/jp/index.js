import React from "react";
import NavigationBar from "./navigation-bar";
import HomeComponent from "./home";
import MenuComponent from "./menu";
import {Routes, Route} from "react-router";
import FindUsComponent from "./find-us";
import FooterComponent from "./footer";


const JadePalace = () => {
    return (
        <div>
            {/* Header */}
            <NavigationBar/>

            {/* Main Component */}
            <div>
                <Routes>
                    <Route index element={<HomeComponent/>}/>
                    <Route path="menu" element={<MenuComponent/>}/>
                    <Route path="find-us" element={<FindUsComponent/>}/>
                </Routes>
            </div>

            {/* Footer */}
            <FooterComponent/>
        </div>
    );
};
export default JadePalace;