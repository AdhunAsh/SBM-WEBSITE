import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div className="flex justify-between items-center font-bold w-full px-5 py-2 z-50 sticky top-0 bg-white">
            <img className="h-10" src={logo} alt="log.png" />
            <nav>
                <ul className="hidden xl:flex gap-8 text-md text-gray-600 cursor-pointer">
                    <a href="#home" className="scroll-smooth">HOME</a>
                    <a href="#markets" className="scroll-smooth">
                        MARKETS
                    </a>
                    <a href="#solutions" className="scroll-smooth">
                        SOLUTIONS
                    </a>
                    <a href="#responsibilities" className="scroll-smooth">
                        RESPONSIBILITIES
                    </a>
                    <NavLink to="/about">ABOUT US</NavLink>
                    <a href="#terms" className="scroll-smooth">
                        TERMS
                    </a>
                    <a href="#resources" className="scroll-smooth">
                        RESOURCES
                    </a>
                    <a href="#contact" className="scroll-smooth">
                        CONTACT
                    </a>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
