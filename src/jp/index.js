import React from "react";
import NavigationBar from "./navigation-bar";
import HomeComponent from "./home";
import MenuComponent from "./menu";
import {Routes, Route} from "react-router";
import ContactComponent from "./contact";


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
                    <Route path="contact-us" element={<ContactComponent/>}/>
                </Routes>
            </div>

            {/* Footer */}

        </div>
    );
};
export default JadePalace;