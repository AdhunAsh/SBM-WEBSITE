import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import containersImage from '../assets/logis/containers.webp'

gsap.registerPlugin(ScrollTrigger);

const responsibilities = [
  {
    title: "On-Time Delivery",
    description: "We ensure every shipment arrives as scheduled with precision timing and reliable tracking.",
    color: "bg-gray-800",
    icon: (
      <svg className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Cargo Safety & Security",
    description: "Advanced security measures and careful handling ensure your goods remain protected throughout transit.",
    color: "bg-black",
    icon: (
      <svg className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Customer Satisfaction",
    description: "Building lasting relationships through personalized service and tailored logistics solutions.",
    color: "bg-gray-700",
    icon: (
      <svg className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
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
    <div ref={sectionRef} className="relative py-24 px-4">
      <div className="w-full">
        <div className="max-w-6xl mx-auto">
          <div ref={titleRef} className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4 drop-shadow-lg font-sans">
              Our Responsibilities
            </h2>
            <div className="flex justify-center mb-6">
              <span className="inline-block w-32 h-1 rounded-full bg-gradient-to-r from-gray-400 via-white to-gray-400 shadow-lg"></span>
            </div>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto drop-shadow font-light">
              Committed to excellence in every aspect of logistics.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {responsibilities.map((item, idx) => (
              <div
                key={idx}
                ref={el => cardsRef.current[idx] = el}
                className="group p-8 bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/20 hover:border-white/40 will-change-transform"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mr-6 shadow-lg transition-transform duration-300`}>
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white leading-tight">{item.title}</h3>
                </div>
                <div className="border-t border-white/20 mb-4"></div>
                <p className="text-gray-100 leading-relaxed text-lg font-medium">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Responsibilities