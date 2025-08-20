import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
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
        <div className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-500 ${scrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
            <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
                <img className="h-8" src={logo} alt="logo" />
                <nav className="hidden md:flex items-center gap-8">
                    <a href="#home" className="text-black hover:text-blue-400 transition-colors duration-300 font-medium">Home</a>
                    <a href="#markets" className="text-black hover:text-blue-400 transition-colors duration-300 font-medium">Services</a>
                    <NavLink to="/about" className="text-black hover:text-blue-400 transition-colors duration-300 font-medium">About</NavLink>
                    <a href="#contact" className="bg-blue-600 text-black px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium">Contact</a>
                </nav>
                <button 
                    className="md:hidden p-2"
                    onClick={() => setVisible(!visible)}
                >
                    <div className="w-6 h-6 flex flex-col justify-center items-center">
                        <span className={`block w-5 h-0.5 bg-black transition-all duration-300 ${visible ? 'rotate-45 translate-y-1' : ''}`}></span>
                        <span className={`block w-5 h-0.5 bg-black mt-1 transition-all duration-300 ${visible ? 'opacity-0' : ''}`}></span>
                        <span className={`block w-5 h-0.5 bg-black mt-1 transition-all duration-300 ${visible ? '-rotate-45 -translate-y-1' : ''}`}></span>
                    </div>
                </button>
            </div>
            {visible && (
                <div className="md:hidden bg-black/20 backdrop-blur-md border-t border-black/10">
                    <div className="flex flex-col p-6 space-y-4">
                        <a href="#home" className="text-black hover:text-blue-400 transition-colors duration-300 font-medium" onClick={() => setVisible(false)}>Home</a>
                        <a href="#markets" className="text-black hover:text-blue-400 transition-colors duration-300 font-medium" onClick={() => setVisible(false)}>Services</a>
                        <NavLink to="/about" className="text-black hover:text-blue-400 transition-colors duration-300 font-medium" onClick={() => setVisible(false)}>About</NavLink>
                        <a href="#contact" className="bg-blue-600 text-black px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium text-center" onClick={() => setVisible(false)}>Contact</a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
