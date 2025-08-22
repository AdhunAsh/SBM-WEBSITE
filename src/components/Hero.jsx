import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import logi1 from '../assets/logis/logi11.webp'
import arrow from '../assets/icons/arrow.png'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const buttonRef = useRef(null);
  const overlayRef = useRef(null);

  const handleClick = () => {
    document.getElementById('markets')?.scrollIntoView({ behavior: 'smooth' })
  }

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
  }, [imageLoaded]);

  return (
    <div ref={heroRef} className='relative min-h-screen bg-gray-900 overflow-hidden'>
        <img 
          className={`w-full h-screen object-cover transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          src={logi1} 
          alt='Cargo logistics'
          loading='eager'
          onLoad={() => setImageLoaded(true)}
        />
        <div ref={overlayRef} className='absolute inset-0 bg-black/40'></div>
        <div className='absolute inset-0 flex items-center px-4 md:px-8 lg:px-16'>
            <div className='w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center'>
                {/* Left Content */}
                <div className='max-w-2xl'>
                    <div className='inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6'>
                        <span className='w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse'></span>
                        Available 24/7 Worldwide
                    </div>
                    <h1 ref={titleRef} className='text-3xl md:text-5xl lg:text-[55px] font-sans text-white mb-6 leading-tight will-change-transform'>Reliable Cargo & Logistics Services – On Time, Every Time</h1>
                    <p ref={descRef} className='lato-regular text-base md:text-lg text-gray-100 leading-relaxed mb-8 will-change-transform'>We connect businesses and customers worldwide with fast, secure, and affordable shipping solutions. Whether it's a single package or bulk cargo, we ensure safe delivery to your destination.</p>
                    
                    <div className='flex flex-col sm:flex-row gap-4 mb-8'>
                        <button ref={buttonRef} onClick={handleClick} className='rounded-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl will-change-transform'>
                            Get Started <img className='w-4' src={arrow} alt="" />
                        </button>
                        <button className='rounded-full px-8 py-4 border-2 border-white/50 text-white font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm'>
                            Track Shipment
                        </button>
                    </div>
                </div>

                {/* Right Stats Cards - Desktop Only */}
                <div className='hidden lg:block'>
                    <div className='grid grid-cols-2 gap-4'>
                        <div className='bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300'>
                            <div className='text-3xl font-bold text-white mb-2'>500+</div>
                            <div className='text-white/80 text-sm'>Global Partners</div>
                        </div>
                        <div className='bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300'>
                            <div className='text-3xl font-bold text-white mb-2'>99.9%</div>
                            <div className='text-white/80 text-sm'>On-Time Delivery</div>
                        </div>
                        <div className='bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300'>
                            <div className='text-3xl font-bold text-white mb-2'>150+</div>
                            <div className='text-white/80 text-sm'>Countries Served</div>
                        </div>
                        <div className='bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300'>
                            <div className='text-3xl font-bold text-white mb-2'>24/7</div>
                            <div className='text-white/80 text-sm'>Customer Support</div>
                        </div>
                    </div>
                    
                    {/* Quick Services */}
                    <div className='mt-6 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10'>
                        <h3 className='text-white font-semibold mb-4'>Quick Services</h3>
                        <div className='space-y-3'>
                            <div className='flex items-center text-white/80 hover:text-white transition-colors cursor-pointer'>
                                <div className='w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3'>
                                    <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                                        <path d='M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z' />
                                    </svg>
                                </div>
                                <span className='text-sm'>Air Freight Express</span>
                            </div>
                            <div className='flex items-center text-white/80 hover:text-white transition-colors cursor-pointer'>
                                <div className='w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3'>
                                    <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                                        <path d='M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z' />
                                    </svg>
                                </div>
                                <span className='text-sm'>Sea Freight Economy</span>
                            </div>
                            <div className='flex items-center text-white/80 hover:text-white transition-colors cursor-pointer'>
                                <div className='w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3'>
                                    <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                                        <path d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' />
                                    </svg>
                                </div>
                                <span className='text-sm'>Customs Clearance</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero