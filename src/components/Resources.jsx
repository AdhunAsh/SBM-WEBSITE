import React from "react";

const Resources = () => {
    return (
        <div className="py-16 px-4 max-w-7xl mx-auto">
            <div className="flex items-center justify-center mb-12">
                <span className="h-1 w-24 bg-gray-600 rounded mr-6"></span>
                <h2 className="text-4xl font-bold text-gray-800 prata-regular tracking-wide">
                    RESOURCES
                </h2>
                <span className="h-1 w-24 bg-gray-600 rounded ml-6"></span>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                    <img
                        src="/icons/guidelines-icon.png"
                        alt="Shipping Guidelines"
                        className="w-16 h-16 mx-auto mb-6"
                    />
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Shipping Guidelines
                    </h3>
                    <p className="text-gray-600">
                        Quick tips for preparing and sending cargo smoothly.
                    </p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                    <img
                        src="/icons/faq-icon.png"
                        alt="FAQs"
                        className="w-16 h-16 mx-auto mb-6"
                    />
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        FAQs
                    </h3>
                    <p className="text-gray-600">
                        Answers to common questions about freight, packing, and
                        delivery.
                    </p>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                    <img
                        src="/icons/support-icon.png"
                        alt="Customer Support"
                        className="w-16 h-16 mx-auto mb-6"
                    />
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Customer Support
                    </h3>
                    <p className="text-gray-600">
                        Direct access to our team for any assistance.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Resources;
