import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import sbmLogo from '../assets/sbmlogo.png';

gsap.registerPlugin(ScrollTrigger);

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8;
      setScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      gsap.fromTo(
        mobileMenuRef.current,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }
      );

      gsap.fromTo(
        ".mobile-link",
        { x: -20, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.1,
        }
      );
    }
  }, [isMenuOpen]);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#markets", label: "Markets" },
    { href: "#solutions", label: "Solutions" },
    { href: "#responsibilities", label: "Services" },
    { href: "#terms", label: "Terms" },
    { href: "#resources", label: "Resources" },
  ];

  const handleLinkClick = (href) => {
    setActive(href);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-white/95 border-b border-[#F9B500]/20 shadow-lg"
          : "backdrop-blur-md bg-white/90"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with enhanced animation */}
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.img 
              src={sbmLogo} 
              alt="SBM Logo" 
              className="h-10 w-auto" 
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.5 }
              }}
            />
            <motion.div
              className={`text-xl font-bold transition-colors hidden sm:block ${
                scrolled ? "text-[#2B3167]" : "text-[#2B3167]"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              SBM Cargo Services LLC
            </motion.div>
          </motion.div>

          {/* Desktop Navigation with enhanced animations */}
          <motion.div 
            className="hidden lg:flex items-center space-x-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`px-4 py-2 text-sm font-medium relative group transition-all duration-300 ${
                  active === link.href
                    ? "text-[#2B3167]"
                    : "text-[#2B3167]/70 hover:text-[#2B3167]"
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.label}
                <motion.span 
                  className="absolute left-0 -bottom-1 h-[2px] bg-[#F9B500]"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Button & Mobile Menu Button with enhanced animations */}
          <motion.div 
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href="#contact"
              className={`hidden sm:flex items-center px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                scrolled
                  ? "bg-[#F9B500] text-[#2B3167] shadow-lg hover:shadow-xl hover:scale-105"
                  : "border-2 border-[#F9B500] text-[#2B3167] hover:bg-[#F9B500]/10 backdrop-blur-sm"
              }`}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(249, 181, 0, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Now
            </motion.a>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-full transition-all duration-300 ${
                scrolled
                  ? "text-[#2B3167] hover:bg-[#F9B500]/20"
                  : "text-[#2B3167] hover:bg-[#F9B500]/10"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </motion.svg>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="lg:hidden backdrop-blur-xl bg-white/95 border-t border-[#F9B500]/20"
        >
          <div className="px-4 py-4 flex flex-col divide-y divide-black/30">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`mobile-link block py-3 px-4 text-[#2B3167] ${
                  active === link.href
                    ? "bg-[#F9B500]"
                    : "hover:bg-[#F9B500]/20"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="mobile-link block mt-4 py-3 px-4 bg-[#F9B500] text-[#2B3167] text-center rounded"
            >
              Contact Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
