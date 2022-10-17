import React from "react";
import NavigationBar from "./navigation-bar";
import HomeComponent from "./home";
import MenuComponent from "./menu";
import {Routes, Route} from "react-router";


const JadePalace = () => {
    return (
        <div>
            <NavigationBar/>
            <div>
                <Routes>
                    <Route index element={<HomeComponent/>}/>
                    <Route path="menu" element={<MenuComponent/>}/>
                </Routes>
            </div>
        </div>
    );
};
export default JadePalace;