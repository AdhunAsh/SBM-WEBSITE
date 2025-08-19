import React from "react";

const Market = () => {
    return (
        <div className="py-16 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-12">
                    <span className="h-1 w-24 bg-gray-600 rounded mr-6"></span>
                    <h2 className="text-4xl font-bold text-gray-800 prata-regular tracking-wide">
                        🌍 MARKETS WE SERVE
                    </h2>
                    <span className="h-1 w-24 bg-gray-600 rounded ml-6"></span>
                </div>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    We provide reliable logistics solutions across multiple
                    industries:
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        E-commerce & Retail
                    </h3>
                    <p className="text-gray-600">
                        Fast and secure deliveries to meet customer demands.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        Manufacturing & Industrial
                    </h3>
                    <p className="text-gray-600">
                        Transport of raw materials, machinery, and finished
                        goods.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        Healthcare & Pharmaceuticals
                    </h3>
                    <p className="text-gray-600">
                        Temperature-sensitive and urgent medical shipments.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        Automotive
                    </h3>
                    <p className="text-gray-600">
                        Just-in-time supply chain support for parts and
                        assemblies.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        Individual & Corporate Clients
                    </h3>
                    <p className="text-gray-600">
                        Tailored courier and freight services for personal and
                        business needs.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Market;
