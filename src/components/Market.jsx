import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { fadeInUp, staggerCards } from "../utils/useGSAP";
import logi6 from "../assets/logis/logi6.webp";
import logi8 from "../assets/logis/logi8.webp";
import logi9 from "../assets/logis/logi9.webp";
import logi3 from "../assets/logis/logi3.webp";
import logi7 from "../assets/logis/logi7.webp";
import logi10 from "../assets/logis/logi10.webp";

gsap.registerPlugin(ScrollTrigger);

const Market = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      fadeInUp(titleRef.current);
      staggerCards(cardsRef.current.filter(Boolean));
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={sectionRef}
      id="markets"
      className="py-20 px-6 md:px-20 max-w-10xl mx-auto"
    >
      <div ref={titleRef} className="text-center mb-12">
        <div className="flex items-center justify-center mb-8">
          <div className="h-1 w-20 bg-gradient-to-r from-transparent to-gray-800 rounded mr-4"></div>
          <h2 className="text-5xl md:text-6xl font-extrabold text-[#2B3167] mb-6 tracking-tight">
            Markets We <span className="text-[#F9B500]">Serve</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-l from-transparent to-gray-800 rounded ml-4"></div>
        </div>
        <p className="text-xl text-[#2B3167] max-w-3xl mx-auto leading-relaxed">
          We provide reliable logistics solutions across multiple industries
        </p>
      </div>

      <div className="max-w-screen mx-auto">
        {/* ✅ Mobile: Single column with enhanced animations */}
        <div className="grid grid-cols-1 md:hidden gap-4">
          {[ 
            { img: logi6, title: "E-commerce & Retail", desc: "Fast deliveries with real-time tracking", color: "#F9B500" },
            { img: logi8, title: "Manufacturing", desc: "Heavy machinery transport", color: "#2B3167" },
            { img: logi3, title: "Healthcare", desc: "Temperature-controlled medical supplies", color: "#89F336" },
            { img: logi7, title: "Automotive", desc: "Just-in-time parts delivery", color: "#F9B500" },
            { img: logi10, title: "Corporate", desc: "Custom logistics solutions", color: "#2B3167" },
          ].map((card, idx) => (
            <motion.div
              key={idx}
              ref={(el) => (cardsRef.current[idx] = el)}
              className="h-[250px] relative rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-500 hover-lift"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <motion.div 
                className="absolute inset-0"
                initial={{ background: "transparent" }}
                whileHover={{ 
                  background: `linear-gradient(45deg, ${card.color}20, transparent)`,
                  transition: { duration: 0.3 }
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <motion.h3 
                  className="text-xl font-bold text-white mb-2"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 + 0.3 }}
                >
                  {card.title}
                </motion.h3>
                <motion.p 
                  className="text-white text-sm opacity-80"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 0.8 }}
                  transition={{ delay: idx * 0.1 + 0.4 }}
                >
                  {card.desc}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ✅ Desktop: Bento grid (unchanged) */}
        <div className="hidden md:block">
          <div className="grid grid-cols-12 gap-4 h-[350px]">
            {/* Large card with enhanced animations */}
            <motion.div
              ref={(el) => (cardsRef.current[5] = el)}
              className="col-span-8 row-span-2 relative rounded-xl overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 will-change-transform"
              initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8 }}
              whileHover={{ 
                scale: 1.02, 
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              <img src={logi6} alt="E-commerce & Retail" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500"></div>
              <motion.div 
                className="absolute inset-0"
                initial={{ background: "transparent" }}
                whileHover={{ 
                  background: "linear-gradient(45deg, #F9B50020, transparent)",
                  transition: { duration: 0.3 }
                }}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <motion.span 
                  className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium mb-3 w-fit animate-pulse-glow"
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                >
                  Featured
                </motion.span>
                <motion.h3 
                  className="text-2xl font-bold text-white mb-3"
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  E-commerce & Retail
                </motion.h3>
                <motion.p 
                  className="text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Fast and secure deliveries with real-time tracking, same-day
                  delivery options, and specialized packaging for fragile items.
                </motion.p>
              </div>
            </motion.div>

            {/* Manufacturing card with enhanced animations */}
            <motion.div
              ref={(el) => (cardsRef.current[6] = el)}
              className="col-span-4 relative rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 will-change-transform"
              initial={{ opacity: 0, x: 50, rotateY: 15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: -5,
                transition: { duration: 0.3 }
              }}
            >
              <img src={logi9} alt="Manufacturing" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/80 transition-all duration-500"></div>
              <motion.div 
                className="absolute inset-0"
                initial={{ background: "transparent" }}
                whileHover={{ 
                  background: "linear-gradient(45deg, #2B316720, transparent)",
                  transition: { duration: 0.3 }
                }}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <motion.h3 
                  className="text-lg font-bold text-white mb-2"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  Manufacturing
                </motion.h3>
                <motion.p 
                  className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  Heavy machinery transport and industrial supply chain
                  management.
                </motion.p>
              </div>
            </motion.div>

            {/* Automotive card */}
            <div
              ref={(el) => (cardsRef.current[7] = el)}
              className="col-span-4 mt-4 relative rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 will-change-transform"
            >
              <img src={logi7} alt="Automotive" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/80 transition-all duration-500"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-lg font-bold text-white mb-2">Automotive</h3>
                <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                  Just-in-time parts delivery and logistics for automotive
                  supply chains.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-4 h-[200px]">
            <div
              ref={(el) => (cardsRef.current[8] = el)}
              className="relative rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 will-change-transform"
            >
              <img src={logi3} alt="Healthcare" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/80 transition-all duration-500"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-lg font-bold text-white mb-2">Healthcare</h3>
                <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                  Temperature-controlled medical supplies and urgent deliveries.
                </p>
              </div>
            </div>

            {/* Corporate card */}
            <div
              ref={(el) => (cardsRef.current[9] = el)}
              className="col-span-2 relative rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 will-change-transform"
            >
              <img src={logi10} alt="Corporate" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/80 transition-all duration-500"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-lg font-bold text-white mb-2">Corporate</h3>
                <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                  Custom logistics solutions and dedicated management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Market;
