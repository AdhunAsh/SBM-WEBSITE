import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import logi1 from '../assets/logis/logi1.webp'
import logi2 from '../assets/logis/logi2.webp'
import logi3 from '../assets/logis/logi3.webp'
import logi4 from '../assets/logis/logi4.webp'
import logi5 from '../assets/logis/logi5.webp'
import logi6 from '../assets/logis/logi6.webp'
import logi7 from '../assets/logis/logi7.webp'
import logi8 from '../assets/logis/logi8.webp'
import logi9 from '../assets/logis/logi9.webp'
import logi10 from '../assets/logis/logi10.webp'
import logi11 from '../assets/logis/logi11.webp'
import containers from '../assets/logis/containers.webp'
import arrow from '../assets/icons/arrow.png'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonRef = useRef(null);
  const overlayRef = useRef(null);

  const images = [logi1, logi2, logi3, logi4, logi5, logi6, logi7, logi9, containers];

  const handleClick = () => {
    document.getElementById('markets')?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 9000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 });
      
      tl.fromTo(titleRef.current, 
        { opacity: 0, y: 100, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "power3.out" }
      )
      .fromTo(descRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, "-=0.6"
      )
      .fromTo(buttonRef.current,
        { opacity: 0, y: 30, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.7)" }, "-=0.4"
      );

      // Parallax effect
      gsap.to(overlayRef.current, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className='relative min-h-screen bg-gray-900 overflow-hidden'>
        {/* Floating particles background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 20 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {images.map((image, index) => (
          <img 
            key={index}
            className={`absolute w-full h-screen object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            src={image} 
            alt='Cargo logistics'
            loading={index === 0 ? 'eager' : 'lazy'}
          />
        ))}
        <div ref={overlayRef} className='absolute inset-0 bg-gradient-to-b from-black/80 to-transparent'></div>
        <div className='absolute inset-0 flex items-center px-4 md:px-8 lg:px-16'>
            <div className='w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center'>
                {/* Left Content */}
                <div className='max-w-2xl'>
                    <motion.div 
                      className='inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6 hover-glow smooth-transition'
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span className='w-2 h-2 bg-[#89F336] rounded-full mr-2 animate-pulse-glow'></span>
                        Available 24/7 Worldwide
                    </motion.div>
                    <h1 ref={titleRef} className='text-3xl md:text-5xl lg:text-[55px] font-bold mb-6 leading-tight will-change-transform drop-shadow-xl/50' style={{
                      background: 'linear-gradient(120deg, rgba(255, 255, 255, 1) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 1) 60%)',
                      backgroundSize: '200% 100%',
                      WebkitBackgroundClip: 'text',
                      backgroundClip: 'text',
                      color: 'transparent',
                      animation: 'shine 3s linear infinite'
                    }}>Reliable Cargo & Logistics Services. <br />On Time, Every Time</h1>
                    <p ref={descRef} className='lato-regular text-base md:text-lg text-white leading-relaxed mb-8 will-change-transform drop-shadow-xl/50'>We connect businesses and customers worldwide with fast, secure, and affordable shipping solutions. Whether it's a single package or bulk cargo, we ensure safe delivery to your destination.</p>
                    
                    <div className='flex flex-col sm:flex-row gap-4 mb-8'>
                        <motion.button 
                          ref={buttonRef} 
                          onClick={handleClick} 
                          className='rounded-full px-8 py-4 bg-[#F9B500] hover:bg-[#F9B500]/90 text-[#2B3167] font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl will-change-transform hover-lift'
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                            Get Started 
                            <motion.img 
                              className='w-4' 
                              src={arrow} 
                              alt=""
                              animate={{ x: [0, 5, 0] }}
                              transition={{ repeat: Infinity, duration: 2 }}
                            />
                        </motion.button>
                    </div>
                </div>

                {/* Right Stats Cards - Desktop Only with Enhanced Animations */}
                <div className='hidden lg:block'>
                    <motion.div 
                      className='grid grid-cols-2 gap-4'
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 1 }}
                    >
                        {[
                          { number: '500+', label: 'Global Partners' },
                          { number: '99.9%', label: 'On-Time Delivery' },
                          { number: '150+', label: 'Countries Served' },
                          { number: '24/7', label: 'Customer Support' }
                        ].map((stat, index) => (
                          <motion.div 
                            key={index}
                            className='glass-morphism rounded-2xl p-6 hover:bg-white/30 transition-all duration-300 shadow-lg hover-lift'
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                            whileHover={{ y: -5 }}
                          >
                            <motion.div 
                              className='text-3xl font-bold text-white mb-2 drop-shadow-lg'
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                            >
                              {stat.number}
                            </motion.div>
                            <div className='text-white/80 text-sm drop-shadow-md'>{stat.label}</div>
                          </motion.div>
                        ))}
                    </motion.div>
                    
                    {/* Quick Services with Enhanced Animations */}
                    <motion.div 
                      className='mt-6 glass-morphism rounded-2xl p-6 shadow-lg'
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 1.8 }}
                    >
                        <h3 className='text-white font-semibold mb-4 drop-shadow-lg'>Quick Services</h3>
                        <div className='space-y-3'>
                            {[
                              { icon: '📦', label: 'Air Freight Express' },
                              { icon: '🚢', label: 'Sea Freight Economy' },
                              { icon: '✅', label: 'Customs Clearance' }
                            ].map((service, index) => (
                              <motion.div 
                                key={index}
                                className='flex items-center text-white/80 hover:text-white transition-colors cursor-pointer hover-lift'
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 2 + index * 0.1 }}
                                whileHover={{ x: 5 }}
                              >
                                <motion.div 
                                  className='w-8 h-8 bg-[#F9B500] rounded-lg flex items-center justify-center mr-3'
                                  whileHover={{ rotate: 360 }}
                                  transition={{ duration: 0.5 }}
                                >
                                    <span className='text-sm'>{service.icon}</span>
                                </motion.div>
                                <span className='text-sm drop-shadow-md'>{service.label}</span>
                              </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero