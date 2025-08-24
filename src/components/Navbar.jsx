import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [visible, setVisible] = useState(false);
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
        <div className="flex justify-between items-center font-bold w-full px-5 py-2 z-50 sticky top-0 bg-white">
            <p className="text-gray-800 poppins text-2xl font-bold">SBM CARGO SERVICES</p>
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
