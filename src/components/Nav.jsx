import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    const [visible, setVisible] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("#home");

    useEffect(() => {
        const handleScroll = () => {
            const heroHeight = window.innerHeight * 0.8;
            setScrolled(window.scrollY > heroHeight);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed  top-0 left-0 w-full flex items-center justify-between px-8 py-2 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-gray-900/70 backdrop-blur-md shadow-md"
                    : "bg-transparent"
            }`}
        >
            {/* Logo */}
            <div className="text-xl font-bold text-white">
                SBM Cargo Service
            </div>

            {/* Nav Links */}
            <div className="flex items-center space-x-6 bg-gray-200 rounded-full px-4 py-2 text-gray-700 font-semibold">
                <a
                    href="#home"
                    onClick={() => setActive("#home")}
                    className={`hover:text-gray-400 transition ${
                        active === "#home"
                            ? "text-white px-4 py-1.5 rounded-full bg-gray-800 font-semibold"
                            : ""
                    }`}
                >
                    Home
                </a>
                <a
                    href="#markets"
                    onClick={() => setActive("#markets")}
                    className={`hover:text-orange-500 transition ${
                        active === "#markets"
                            ? "text-white px-4 py-1.5 rounded-full bg-gray-800 font-semibold"
                            : ""
                    }`}
                >
                    Market
                </a>
                <a
                    href="#solutions"
                    onClick={() => setActive("#solutions")}
                    className={`hover:text-orange-500 transition ${
                        active === "#solutions"
                            ? "text-white px-4 py-1.5 rounded-full bg-gray-800 font-semibold"
                            : ""
                    }`}
                >
                    Solution
                </a>
                <a
                    href="#about"
                    onClick={() => setActive("#about")}
                    className={`hover:text-orange-500 transition ${
                        active === "#about"
                            ? "text-white px-4 py-1.5 rounded-full bg-gray-800 font-semibold"
                            : ""
                    }`}
                >
                    About Us
                </a>
                <a
                    href="#terms"
                    onClick={() => setActive("#terms")}
                    className={`hover:text-orange-500 transition ${
                        active === "#terms"
                            ? "text-white px-4 py-1.5 rounded-full bg-gray-800 font-semibold"
                            : ""
                    }`}
                >
                    Responsibilities
                </a>
                <a
                    href="#terms"
                    onClick={() => setActive("#terms")}
                    className={`hover:text-orange-500 transition ${
                        active === "#terms"
                            ? "text-white px-4 py-1.5 rounded-full bg-gray-800 font-semibold"
                            : ""
                    }`}
                >
                    Terms
                </a>
                <a
                    href="#terms"
                    onClick={() => setActive("#resources")}
                    className={`hover:text-orange-500 transition ${
                        active === "#resources"
                            ? "text-white px-4 py-1.5 rounded-full bg-gray-800 font-semibold"
                            : ""
                    }`}
                >
                    Resources
                </a>
            </div>

            <a
                href="#contact"
                className="flex items-center space-x-2 border border-white px-3 py-2 rounded-full hover:bg-orange-500 hover:border-orange-500 transition"
            >
                <span className="text-white">Contact now</span>
            </a>
        </nav>
    );
};

export default Nav;
