import React from "react";

const Solutions = () => {
    return (
        <div className="py-16 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-12">
                    <span className="h-1 w-24 bg-gray-600 rounded mr-6"></span>
                    <h2 className="text-4xl font-bold text-gray-800 prata-regular tracking-wide">
                        🚚 OUR SOLUTIONS
                    </h2>
                    <span className="h-1 w-24 bg-gray-600 rounded ml-6"></span>
                </div>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    With a comprehensive portfolio of logistics services, we
                    ensure smooth cargo movement across borders and industries:
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-3xl mb-4">✈️</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        Air Freight
                    </h3>
                    <p className="text-gray-600">
                        Fast, efficient air cargo delivery worldwide.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-3xl mb-4">🚢</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        Sea Freight
                    </h3>
                    <p className="text-gray-600">
                        Cost-effective global shipping solutions.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-3xl mb-4">🚛</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        Land Freight
                    </h3>
                    <p className="text-gray-600">
                        Reliable road transport across regions.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-3xl mb-4">📄</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        Customs Brokerage
                    </h3>
                    <p className="text-gray-600">
                        Hassle-free customs clearance and documentation.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-3xl mb-4">📦</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        Packing & Lashing
                    </h3>
                    <p className="text-gray-600">
                        Secure packing solutions to protect your cargo.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-3xl mb-4">🏢</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        FTA Approved Warehouses
                    </h3>
                    <p className="text-gray-600">
                        Safe and compliant storage facilities.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
                    <div className="text-3xl mb-4">📨</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        Courier Services
                    </h3>
                    <p className="text-gray-600">
                        Express door-to-door delivery for small and critical
                        shipments.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Solutions;
