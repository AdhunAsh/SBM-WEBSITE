import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const heroHeight = window.innerHeight * 0.8;
            setScrolled(window.scrollY > heroHeight);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="flex justify-between items-center font-bold w-full px-5 py-2 z-50 sticky top-0 backdrop-blur-lg bg-white/30">
            <p className="text-gray-800 poppins text-2xl font-bold">SBM CARGO</p>
            <nav>
                <ul className="hidden xl:flex gap-8 text-md text-gray-700 cursor-pointer">
                    <a href="#home" className="scroll-smooth">Home</a>
                    <NavLink to="/about">About</NavLink>
                    <a href="#contact" className="scroll-smooth">Contact</a>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
