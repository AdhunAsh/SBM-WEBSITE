import React from "react";

const Contact = () => {
    return (
        <div className="py-16 px-4 max-w-7xl mx-auto">
            {/* Centered Heading with Orange Lines */}
            <div className="flex items-center justify-center mb-12">
                <span className="h-1 w-24 bg-gray-600 rounded mr-6"></span>
                <h2 className="text-4xl font-bold text-gray-800 prata-regular tracking-wide">
                    CONTACT US
                </h2>
                <span className="h-1 w-24 bg-gray-600 rounded ml-6"></span>
            </div>

            {/* Two Column Layout */}
            <div className="flex flex-col lg:flex-row gap-12">
                {/* Left: Contact Info */}
                <div className="w-full lg:w-1/3 flex flex-col items-start">
                    <h3 className="text-3xl font-semibold text-gray-900 mb-10">
                        REACH US
                    </h3>
                    <div className="flex items-start mb-8">
                        <span className="text-orange-400 text-3xl mr-4 mt-1">
                            {/* Location Icon */}
                            <svg
                                width="28"
                                height="28"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M12 2C7.03 2 3 6.03 3 11c0 5.25 7.11 10.74 8.06 11.43.34.25.8.25 1.14 0C13.89 21.74 21 16.25 21 11c0-4.97-4.03-9-9-9zm0 17.88C9.14 17.1 5 13.61 5 11c0-3.86 3.14-7 7-7s7 3.14 7 7c0 2.61-4.14 6.1-7 8.88z"
                                />
                                <circle
                                    cx="12"
                                    cy="11"
                                    r="3"
                                    fill="currentColor"
                                />
                            </svg>
                        </span>
                        <span className="text-gray-800 text-lg">
                            M-202, Al Ahrar Building,
                            <br />
                            Salah Al Din Street,
                            <br />
                            Al Khabaisi Area,
                            <br />
                            Dubai, UAE
                        </span>
                    </div>
                    <div className="flex items-center mb-8">
                        <span className="text-orange-400 text-3xl mr-4">
                            {/* Email Icon */}
                            <svg
                                width="28"
                                height="28"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8.99l8 6.99 8-6.99V18z"
                                />
                            </svg>
                        </span>
                        <span className="text-gray-800 text-lg">
                            cargoservice@sbm.com
                        </span>
                    </div>
                    <div className="flex items-center mb-8">
                        <span className="text-orange-400 text-3xl mr-4">
                            {/* Phone Icon */}
                            <svg
                                width="28"
                                height="28"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="currentColor"
                                    d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z"
                                />
                            </svg>
                        </span>
                        <span className="text-gray-800 text-lg">
                            +91 1234567890
                        </span>
                    </div>
                </div>

                {/* Right: Contact Form (unchanged) */}
                <div className="w-full lg:w-2/3">
                    <form className="w-full max-w-2xl mx-auto">
                        <div className="flex flex-col gap-4">
                            <input
                                className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-orange-400"
                                type="text"
                                placeholder="Your Name"
                            />
                            <input
                                className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-orange-400"
                                type="email"
                                placeholder="Your Email"
                            />
                            <input
                                className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-orange-400"
                                type="text"
                                placeholder="Mobile Number"
                            />
                            <textarea
                                className="border border-gray-300 rounded px-4 py-3 focus:outline-none focus:border-orange-400"
                                rows={4}
                                placeholder="Message"
                            />
                        </div>
                        <div className="flex justify-center mt-8">
                            <button
                                type="submit"
                                className="bg-orange-300 hover:bg-orange-400 text-white font-semibold rounded-full px-10 py-3 transition-colors duration-200"
                            >
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
