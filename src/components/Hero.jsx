import React from 'react'
import logi1 from '../assets/logis/logi11.jpg'

const Hero = () => {
  return (
    <div className='relative min-h-screen'>
        <img className='w-full h-screen object-cover' src={logi1} alt=''/>
        <div className='absolute inset-0 bg-gradient-to-t from-black/40 to-transparent'></div>
        <div className='absolute inset-0 flex items-center px-4 md:px-8 lg:px-16'>
            <div className='max-w-4xl'>
                <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight'>"Reliable Cargo & Logistics Services – On Time, Every Time"</h1>
                <p className='lato-regular text-lg md:text-xl text-gray-100 leading-relaxed max-w-2xl bg-black/20 p-4 rounded-lg backdrop-blur-[3px] mb-8'>We connect businesses and customers worldwide with fast, secure, and affordable shipping solutions. Whether it's a single package or bulk cargo, we ensure safe delivery to your destination.</p>
                <a href='#markets' className='inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 shadow-lg hover:shadow-xl'>Learn More</a>
            </div>
        </div>
    </div>
  )
}

export default Hero