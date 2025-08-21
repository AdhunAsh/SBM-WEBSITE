import React from "react";
import guideline from "../assets/icons/guideline.png";
import faq from "../assets/icons/faq.png";
import support from "../assets/icons/support.png";

const Res = () => {
    return (
        <div className="py-16 px-4 max-w-7xl mx-auto">
            <div className="flex items-center justify-center mb-22">
                <span className="h-1 w-24 bg-gray-600 rounded mr-6"></span>
                <h2 className="text-4xl font-bold text-gray-800 prata-regular tracking-wide">
                    RESOURCES
                </h2>
                <span className="h-1 w-24 bg-gray-600 rounded ml-6"></span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center text-sm md:text-base text-gray-700">
                <div>
                    <img src={guideline} className="w-12 m-auto mb-5" alt="" />
                    <p className="font-semibold">Shipping Guidelines</p>
                    <p className="text-gray-400">
                        Quick tips for preparing and sending cargo smoothly.
                    </p>
                </div>

                <div>
                    <img src={faq} className="w-12 m-auto mb-5" alt="" />
                    <p className="font-semibold">FAQs</p>
                    <p className="text-gray-400">
                        Answers to common questions about freight, packing,
                        anddelivery.
                    </p>
                </div>

                <div>
                    <img src={support} className="w-12 m-auto mb-5" alt="" />
                    <p className="font-semibold">Best customer support</p>
                    <p className="text-gray-400">
                        Direct access to our team for any assistance.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Res;
