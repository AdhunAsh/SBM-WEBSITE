import React from 'react'

const Responsibilities = () => {
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto">
      <div className="flex items-center justify-center mb-12">
                <span className="h-1 w-24 bg-gray-600 rounded mr-6"></span>
                <h2 className="text-4xl font-bold text-gray-800 prata-regular tracking-wide">
                    RESPONSIBILITIES
                </h2>
                <span className="h-1 w-24 bg-gray-600 rounded ml-6"></span>
            </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
          <img src="/icons/clock-icon.png" alt="On-Time Delivery" className="w-16 h-16 mx-auto mb-6" />
          <h3 className="text-xl font-semibold text-gray-800 mb-4">On-Time Delivery</h3>
          <p className="text-gray-600">We ensure every shipment arrives as scheduled.</p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
          <img src="/icons/security-icon.png" alt="Cargo Safety & Security" className="w-16 h-16 mx-auto mb-6" />
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Cargo Safety & Security</h3>
          <p className="text-gray-600">Reliable handling and protection for your goods.</p>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
          <img src="/icons/support-icon.png" alt="Customer Satisfaction" className="w-16 h-16 mx-auto mb-6" />
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Customer Satisfaction</h3>
          <p className="text-gray-600">Building trust through reliable, tailored logistics solutions.</p>
        </div>

      </div>
    </div>
  )
}

export default Responsibilities