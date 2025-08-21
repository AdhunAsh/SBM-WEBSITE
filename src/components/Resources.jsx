import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import customerSupportIcon from "../assets/icons/customer-support.png";
import tagIcon from "../assets/icons/tag.png";
import twoPeopleIcon from "../assets/icons/two-people.png";

gsap.registerPlugin(ScrollTrigger);

const resources = [
  {
    title: "Shipping Guidelines",
    description: "Comprehensive guides for preparing, packaging, and sending cargo smoothly across all transport modes.",
    icon: tagIcon,
    features: ["Packaging Standards", "Documentation Checklist", "Safety Protocols"]
  },
  {
    title: "Customer Support",
    description: "24/7 dedicated support team ready to assist with tracking, queries, and emergency logistics needs.",
    icon: customerSupportIcon,
    features: ["Live Chat Support", "Phone Assistance", "Email Support"]
  },
  {
    title: "Expert Consultation",
    description: "Connect with our logistics experts for customized solutions and strategic supply chain optimization.",
    icon: twoPeopleIcon,
    features: ["Route Optimization", "Cost Analysis", "Custom Solutions"]
  }
];

const Resources = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const cardsRef = useRef([]);
    const ctaRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Title animation
            gsap.fromTo(titleRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // Resource cards with bounce effect
            gsap.fromTo(cardsRef.current,
                { opacity: 0, y: 100, rotation: 10 },
                {
                    opacity: 1,
                    y: 0,
                    rotation: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 70%",
                        toggleActions: "play none none reverse"
                    }
                }
            );

            // CTA section
            gsap.fromTo(ctaRef.current,
                { opacity: 0, scale: 0.8 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ctaRef.current,
                        start: "top 80%",
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
                <div ref={titleRef} className="text-center mb-16">
                    <div className="flex items-center justify-center mb-8">
                        <div className="h-1 w-20 bg-gradient-to-r from-transparent to-gray-800 rounded mr-4"></div>
                        <h2 className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">
                            RESOURCES & SUPPORT
                        </h2>
                        <div className="h-1 w-20 bg-gradient-to-l from-transparent to-gray-800 rounded ml-4"></div>
                    </div>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Everything you need to make your logistics experience seamless and successful
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {resources.map((resource, idx) => (
                        <div
                            key={idx}
                            ref={el => cardsRef.current[idx] = el}
                            className="group relative bg-white/10 backdrop-blur-sm p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-white/20"
                        >
                            {/* Gradient border effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                            
                            {/* Icon */}
                            <div className="relative mb-8">
                                <div className="w-20 h-20 bg-black rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mx-auto">
                                    <img src={resource.icon} alt={resource.title} className="w-10 h-10 filter brightness-0 invert" />
                                </div>
                                {/* Floating dots */}
                                <div className="absolute -top-2 -right-2 w-4 h-4 bg-gray-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce"></div>
                                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-gray-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce" style={{animationDelay: '0.2s'}}></div>
                            </div>
                            
                            <div className="text-center relative">
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-200 transition-colors duration-300">
                                    {resource.title}
                                </h3>
                                
                                <p className="text-gray-300 leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                                    {resource.description}
                                </p>
                                
                                {/* Features list */}
                                <div className="space-y-2 mb-6">
                                    {resource.features.map((feature, featureIdx) => (
                                        <div key={featureIdx} className="flex items-center justify-center text-sm text-gray-400">
                                            <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                                
                                {/* Action button */}
                                <button className="w-full py-3 px-6 bg-white text-black font-semibold rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-200 transform hover:-translate-y-1 transition-all duration-300 opacity-0 group-hover:opacity-100">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Additional Resources Section */}
                <div ref={ctaRef} className="mt-20 text-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20">
                        <h3 className="text-3xl font-bold text-white mb-4">Need More Help?</h3>
                        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                            Our comprehensive knowledge base and expert team are here to support your logistics journey every step of the way.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-gray-200 transform hover:-translate-y-1 transition-all duration-300">
                                Download Guides
                            </button>
                            <button className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-gray-600 transform hover:-translate-y-1 transition-all duration-300">
                                Schedule Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resources;
