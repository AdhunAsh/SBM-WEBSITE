import React, { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import people from '../assets/icons/two-people.png'
import support from '../assets/icons/customer-support.png'
import tag from '../assets/icons/tag.png'
import marine from '../assets/icons/cargo-ship.png'
import flight from '../assets/icons/flight.png'
import truck from '../assets/icons/cargo-truck.png'
import logi1 from '../assets/logis/logi1.jpg'
import logi2 from '../assets/logis/logi2.jpg'
import logi4 from '../assets/logis/logi4.jpg'

gsap.registerPlugin(ScrollTrigger);

const whyChooseUs = [
  {
    icon: people,
    title: "Expert Team",
    description: "Industry veterans with decades of combined experience in global logistics and supply chain management.",
    stats: "15+ Years Experience"
  },
  {
    icon: support,
    title: "24/7 Support",
    description: "Round-the-clock customer service ensuring your shipments are monitored and supported at all times.",
    stats: "99.9% Uptime"
  },
  {
    icon: tag,
    title: "Competitive Pricing",
    description: "Transparent, competitive rates with no hidden fees, ensuring maximum value for your logistics investment.",
    stats: "Best Market Rates"
  }
];

const services = [
  {
    icon: marine,
    title: "Marine Cargo Service",
    description: "Comprehensive sea freight solutions with full container loads, LCL options, and specialized vessel arrangements.",
    image: logi2,
    features: ["FCL & LCL Options", "Port-to-Port Delivery", "Customs Clearance"]
  },
  {
    icon: flight,
    title: "Air Cargo Service",
    description: "Fast, reliable air freight with priority handling, temperature control, and express delivery options.",
    image: logi1,
    features: ["Express Delivery", "Temperature Control", "Priority Handling"]
  },
  {
    icon: truck,
    title: "Inland Cargo Service",
    description: "Efficient road transport with flexible scheduling, real-time tracking, and door-to-door delivery.",
    image: logi4,
    features: ["Door-to-Door", "Real-time Tracking", "Flexible Scheduling"]
  }
];

const Choose = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const whyCardsRef = useRef([]);
  const servicesRef = useRef(null);
  const serviceCardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main title animation
      gsap.fromTo(titleRef.current,
        { opacity: 0, scale: 0.8, y: 50 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Why choose us cards
      gsap.fromTo(whyCardsRef.current,
        { opacity: 0, x: -100, rotation: -5 },
        {
          opacity: 1,
          x: 0,
          rotation: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Services section
      gsap.fromTo(servicesRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Service cards with 3D effect
      gsap.fromTo(serviceCardsRef.current,
        { opacity: 0, y: 120, rotationX: 45 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.2,
          stagger: 0.25,
          ease: "power3.out",
          scrollTrigger: {
            trigger: serviceCardsRef.current[0],
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
        {/* Why Choose Us Section */}
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            Why Choose <span className="text-gray-300">SBM Logistics?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Experience the difference with our commitment to excellence, innovation, and customer satisfaction
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {whyChooseUs.map((item, idx) => (
            <div
              key={idx}
              ref={el => whyCardsRef.current[idx] = el}
              className="group relative bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20 shadow-2xl hover:bg-white/20 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <img src={item.icon} alt={item.title} className="w-10 h-10" />
              </div>
              
              {/* Stats badge */}
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-gray-300 text-sm font-semibold mb-4">
                {item.stats}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-300 transition-colors duration-300">
                {item.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
                {item.description}
              </p>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-gray-400 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-gray-600 rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center mb-20">
          <div className="h-px w-32 bg-gradient-to-r from-transparent to-gray-400"></div>
          <div className="mx-4 w-3 h-3 bg-gray-400 rounded-full"></div>
          <div className="h-px w-32 bg-gradient-to-l from-transparent to-gray-400"></div>
        </div>

        {/* Services Section */}
        <div ref={servicesRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Our <span className="text-gray-300">Core Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive logistics solutions tailored to meet your specific transportation needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              ref={el => serviceCardsRef.current[idx] = el}
              className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent group-hover:from-black/95 transition-all duration-300"></div>
              
              {/* Content */}
              <div className="relative p-8 h-96 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img src={service.icon} alt={service.title} className="w-8 h-8 filter brightness-0 invert" />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    {service.features.map((feature, featureIdx) => (
                      <div key={featureIdx} className="flex items-center text-sm text-gray-300">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center px-8 py-4 bg-white text-black font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-gray-200 transform hover:-translate-y-1 transition-all duration-300">
            <span>Get Started Today</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Choose