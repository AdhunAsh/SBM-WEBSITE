import React from "react";

const Terms = () => {
    return (
        <div className="py-16 px-4 max-w-7xl mx-auto">
            <div className="flex items-center justify-center mb-12">
                <span className="h-1 w-24 bg-gray-600 rounded mr-6"></span>
                <h2 className="text-4xl font-bold text-gray-800 prata-regular tracking-wide">
                    TERMS
                </h2>
                <span className="h-1 w-24 bg-gray-600 rounded ml-6"></span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        Service Commitment
                    </h3>
                    <p className="text-gray-600">
                        All shipments are handled with utmost care under agreed
                        schedules.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        Liability
                    </h3>
                    <p className="text-gray-600">
                        The company is not responsible for delays caused by
                        customs, natural events, or factors beyond our control.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        Payment
                    </h3>
                    <p className="text-gray-600">
                        All charges must be settled as per the agreed quotation
                        before cargo release.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        Documentation
                    </h3>
                    <p className="text-gray-600">
                        Customers are responsible for providing accurate
                        shipping documents.
                    </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        Prohibited Goods
                    </h3>
                    <p className="text-gray-600">
                        Restricted or illegal items will not be accepted for
                        shipment.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Terms;
