import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const terms = [
  {
    title: "Service Commitment",
    description: "All shipments are handled with utmost care under agreed schedules with full transparency.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
  },
  {
    title: "Liability Coverage",
    description: "Comprehensive protection with clear guidelines on responsibilities and coverage limitations.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    title: "Payment Terms",
    description: "Flexible payment options with secure processing and transparent pricing structures.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" />
      </svg>
    )
  },
  {
    title: "Documentation",
    description: "Streamlined documentation process with digital tracking and compliance verification.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    title: "Compliance & Safety",
    description: "Strict adherence to international regulations and safety standards for all shipments.",
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z" clipRule="evenodd" />
      </svg>
    )
  }
];

const Terms = () => {
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
                { opacity: 0, y: 50, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
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
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>
            
            <div className="relative max-w-7xl mx-auto">
                <div ref={titleRef} className="text-center mb-16">
                    <div className="flex items-center justify-center mb-8">
                        <div className="h-1 w-20 bg-gradient-to-r from-transparent to-gray-800 rounded mr-4"></div>
                        <h2 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
                            TERMS & CONDITIONS
                        </h2>
                        <div className="h-1 w-20 bg-gradient-to-l from-transparent to-gray-800 rounded ml-4"></div>
                    </div>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Clear, transparent terms that protect both our clients and our commitment to excellence
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {terms.map((term, idx) => (
                        <div
                            key={idx}
                            ref={el => cardsRef.current[idx] = el}
                            className="group relative bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-white/20 will-change-transform"
                        >
                            {/* Icon with gradient background */}
                            <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                                {term.icon}
                            </div>
                            
                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-200 transition-colors duration-300">
                                {term.title}
                            </h3>
                            
                            <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                                {term.description}
                            </p>
                            
                            {/* Decorative element */}
                            <div className="absolute top-4 right-4 w-2 h-2 bg-white/30 rounded-full group-hover:bg-white/60 transition-colors duration-300"></div>
                        </div>
                    ))}
                </div>
                
                {/* Legal Notice */}
                <div className="mt-16 text-center">
                    <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-gray-300 text-sm">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        For complete terms and conditions, please contact our legal department
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Terms;
