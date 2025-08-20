import React from "react";
import logi6 from "../assets/logis/logi6.jpg";
import logi8 from "../assets/logis/logi8.jpg";
import logi3 from "../assets/logis/logi3.jpg";
import logi7 from "../assets/logis/logi7.jpg";
import logi10 from "../assets/logis/logi10.jpg";

const Market = () => {
    return (
        <div id="markets" className="py-20 px-20 max-w-10xl mx-auto">
            <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-8">
                    <span className="h-1 w-16 bg-gray-600 rounded mr-4"></span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-wide">
                        🌍 MARKETS WE SERVE
                    </h2>
                    <span className="h-1 w-16 bg-gray-600 rounded ml-4"></span>
                </div>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    We provide reliable logistics solutions across multiple industries
                </p>
            </div>

            <div className="max-w-screen mx-auto">
                {/* Mobile: Single column */}
                <div className="grid grid-cols-1 md:hidden gap-4">
                    <div className="h-[250px] relative rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-500">
                        <div className="w-full h-50% bg-cover bg-center bg-gray-800 transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${logi6})` }}>
                            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-500"></div>
                            <div className="absolute inset-0 flex flex-col justify-end p-6">
                                <h3 className="text-xl font-bold text-white mb-2">E-commerce & Retail</h3>
                                <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">Fast deliveries with real-time tracking</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-[250px] relative rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-500">
                        <div className="w-full h-full bg-cover bg-center bg-gray-700 transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${logi8})` }}>
                            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-500"></div>
                            <div className="absolute inset-0 flex flex-col justify-end p-6">
                                <h3 className="text-xl font-bold text-white mb-2">Manufacturing</h3>
                                <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">Heavy machinery transport</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-[250px] relative rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-500">
                        <div className="w-full h-full bg-cover bg-center bg-gray-600 transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${logi3})` }}>
                            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-500"></div>
                            <div className="absolute inset-0 flex flex-col justify-end p-6">
                                <h3 className="text-xl font-bold text-white mb-2">Healthcare</h3>
                                <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">Temperature-controlled medical supplies</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-[250px] relative rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-500">
                        <div className="w-full h-full bg-cover bg-center bg-gray-500 transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${logi7})` }}>
                            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-500"></div>
                            <div className="absolute inset-0 flex flex-col justify-end p-6">
                                <h3 className="text-xl font-bold text-white mb-2">Automotive</h3>
                                <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">Just-in-time parts delivery</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-[250px] relative rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-500">
                        <div className="w-full h-full bg-cover bg-center bg-gray-400 transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${logi10})` }}>
                            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-500"></div>
                            <div className="absolute inset-0 flex flex-col justify-end p-6">
                                <h3 className="text-xl font-bold text-white mb-2">Corporate</h3>
                                <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">Custom logistics solutions</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Desktop: Bento grid */}
                <div className="hidden md:block">
                    <div className="grid grid-cols-12 gap-4 h-[350px]">
                        {/* Large card */}
                        <div className="col-span-8 row-span-2 relative rounded-xl overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                            <div className="w-full h-full bg-cover bg-center bg-gray-800 transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${logi6})` }}>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500"></div>
                                <div className="absolute inset-0 flex flex-col justify-end p-8">
                                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-medium mb-3 w-fit">Featured</span>
                                    <h3 className="text-2xl font-bold text-white mb-3">E-commerce & Retail</h3>
                                    <p className="text-white/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">Fast and secure deliveries with real-time tracking, same-day delivery options, and specialized packaging for fragile items.</p>
                                </div>
                            </div>
                        </div>

                        {/* Manufacturing card */}
                        <div className="col-span-4 relative rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                            <div className="w-full h-full bg-cover bg-center bg-gray-700 transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${logi8})` }}>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/80 transition-all duration-500"></div>
                                <div className="absolute inset-0 flex flex-col justify-end p-6">
                                    <h3 className="text-lg font-bold text-white mb-2">Manufacturing</h3>
                                    <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">Heavy machinery transport and industrial supply chain management.</p>
                                </div>
                            </div>
                        </div>

                        {/* Automotive card placed under Manufacturing */}
                        <div className="col-span-4 mt-4 relative rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                            <div className="w-full h-full bg-cover bg-center bg-gray-500 transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${logi7})` }}>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/80 transition-all duration-500"></div>
                                <div className="absolute inset-0 flex flex-col justify-end p-6">
                                    <h3 className="text-lg font-bold text-white mb-2">Automotive</h3>
                                    <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">Just-in-time parts delivery and logistics for automotive supply chains.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mt-4 h-[200px]">
                        <div className="relative rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                            <div className="w-full h-full bg-cover bg-center bg-gray-600 transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${logi3})` }}>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/80 transition-all duration-500"></div>
                                <div className="absolute inset-0 flex flex-col justify-end p-6">
                                    <h3 className="text-lg font-bold text-white mb-2">Healthcare</h3>
                                    <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">Temperature-controlled medical supplies and urgent deliveries.</p>
                                </div>
                            </div>
                        </div>

                        {/* Corporate card now spans columns 2 and 3 */}
                        <div className="col-span-2 relative rounded-xl overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                            <div className="w-full h-full bg-cover bg-center bg-gray-400 transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: `url(${logi10})` }}>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent group-hover:from-black/80 transition-all duration-500"></div>
                                <div className="absolute inset-0 flex flex-col justify-end p-6">
                                    <h3 className="text-lg font-bold text-white mb-2">Corporate</h3>
                                    <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">Custom logistics solutions and dedicated management.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Market;
