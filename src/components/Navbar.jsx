import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div className="flex justify-between items-center font-bold z-1000 w-full">
            <img className="h-10" src={logo} alt="log.png" />
            <nav>
                <ul className="hidden xl:flex gap-8 text-md text-gray-600 cursor-pointer">
                    <Link to="/">HOME</Link>
                    <a href="#markets">MARKETS</a>
                    <a href="#solutions">SOLUTIONS</a>
                    <a href="#responsibilities">RESPONSIBILITIES</a>
                    <Link to="/about">ABOUT US</Link>
                    <a href="#terms">TERMS</a>
                    <a href="#resources">RESOURCES</a>
                    <a href="#contact">CONTACT</a>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
