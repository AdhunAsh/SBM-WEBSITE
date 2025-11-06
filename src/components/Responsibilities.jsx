import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from 'framer-motion'
import containersImage from '../assets/logis/containers.webp'

gsap.registerPlugin(ScrollTrigger);

const responsibilities = [
  {
    title: "On-Time Delivery",
    description: "We ensure every shipment arrives as scheduled with precision timing and reliable tracking.",
    stats: "100% Reliability",
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Cargo Safety & Security",
    description: "Advanced security measures and careful handling ensure your goods remain protected throughout transit.",
    stats: "Zero Damage Policy",
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Customer Satisfaction",
    description: "Building lasting relationships through personalized service and tailored logistics solutions.",
    stats: "98% Satisfaction Rate",
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

const Responsibilities = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(cardsRef.current.filter(Boolean),
        { opacity: 0, y: 60, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="relative py-24 px-4 overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold text-[#2B3167] mb-6 tracking-tight">
            Our <span className="text-[#F9B500]">Responsibilities</span>
          </h2>
          <p className="text-xl text-[#2B3167] max-w-3xl mx-auto leading-relaxed">
            Committed to excellence in every aspect of logistics.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {responsibilities.map((item, idx) => (
            <motion.div
              key={idx}
              ref={el => cardsRef.current[idx] = el}
              className="group relative glass-morphism p-8 rounded-3xl border border-white/20 shadow-2xl transition-all duration-300 hover:-translate-y-1 will-change-transform overflow-hidden hover-lift"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: idx * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              {/* Animated background circle */}
              <motion.div 
                className="absolute -left-full top-0 w-full h-full bg-[#2B3167] rounded-full scale-0 group-hover:scale-[3] group-hover:left-0 transition-all duration-700 ease-in-out"
                whileHover={{ 
                  scale: [0, 1.5, 3],
                  left: ["-100%", "-50%", "0%"],
                  transition: { duration: 0.7 }
                }}
              />
              
              {/* Floating particles around icon */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {Array.from({ length: 3 }, (_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-[#F9B500] rounded-full opacity-0 group-hover:opacity-100"
                    style={{
                      left: `${20 + i * 20}%`,
                      top: `${20 + i * 15}%`,
                    }}
                    animate={{
                      y: [-10, 10, -10],
                      x: [-5, 5, -5],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2 + i * 0.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </div>
              
              {/* Icon with enhanced animation */}
              <motion.div 
                className="relative z-10 w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ 
                  delay: idx * 0.15 + 0.3,
                  type: "spring",
                  stiffness: 200,
                  damping: 10
                }}
                whileHover={{ 
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                {item.icon}
              </motion.div>
              
              {/* Stats badge with pulse animation */}
              <motion.div 
                className="relative z-10 inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-[#2B3167] group-hover:text-white text-sm font-semibold mb-4 transition-colors duration-300"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: idx * 0.15 + 0.4 }}
                whileHover={{ 
                  scale: [1, 1.1, 1],
                  transition: { duration: 0.3 }
                }}
              >
                {item.stats}
              </motion.div>
              
              <motion.h3 
                className="relative z-10 text-2xl font-bold text-[#2B3167] group-hover:text-white mb-4 transition-colors duration-300"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: idx * 0.15 + 0.5 }}
              >
                {item.title}
              </motion.h3>
              
              <motion.p 
                className="relative z-10 text-[#2B3167] group-hover:text-white leading-relaxed transition-colors duration-300"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: idx * 0.15 + 0.6 }}
              >
                {item.description}
              </motion.p>
              
              {/* Decorative animated elements */}
              <motion.div 
                className="absolute top-4 right-4 w-2 h-2 bg-gray-400 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: idx * 0.5,
                }}
              />
              <motion.div 
                className="absolute bottom-4 left-4 w-1 h-1 bg-gray-600 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: idx * 0.7,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Responsibilities