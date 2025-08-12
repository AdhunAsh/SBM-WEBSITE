import React, { useState } from "react";
import logo from "../assets/logo.png";


const Navbar = () => {

    const [visible, setVisible] = useState(false);

    return (
        <div className="flex justify-between items-center font-bold z-1000 w-full">
            <img className="h-10" src={logo} alt="log.png" />
            <nav>
                <ul className="hidden xl:flex gap-8 text-md text-gray-600 cursor-pointer">
                    <li>HOME</li>
                    <li>MARKETS</li>
                    <li>SOLUTIONS</li>
                    <li>ABOUT US</li>
                    <li>RESPONSIBILITIES</li>
                    <li>TERMS</li>
                    <li>RESOURCES</li>
                    <li>CONTACT</li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;

