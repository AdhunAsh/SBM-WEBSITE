import React from 'react'
import logi1 from '../assets/logis/logi11.jpg'
import arrow from '../assets/icons/arrow.png'

const Hero = () => {

  const handleClick = () => {
    document.getElementById('markets')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className='relative min-h-screen '>
        <img className='w-full h-screen object-cover rounded-3xl' src={logi1} alt=''/>
        <div className='absolute inset-0 '></div>
        <div className='absolute inset-0 flex items-center px-4 md:px-8 lg:px-16'>
            <div className='max-w-4xl'>
                <h1 className='text-3xl md:text-5xl lg:text-[55px] font-sans text-white mb-6 leading-tight'>Reliable Cargo & Logistics Services – On Time, Every Time</h1>
                <p className='lato-regular text-base md:text-lg text-gray-100 leading-relaxed max-w-2xl bg-black/20 p-4 rounded-lg backdrop-blur-[3px]'>We connect businesses and customers worldwide with fast, secure, and affordable shipping solutions. Whether it's a single package or bulk cargo, we ensure safe delivery to your destination.</p>
                <button onClick={handleClick} className='rounded-full px-6 py-3 bg-white hover:bg-blue-700 text-black font-medium transition-colors duration-200 mt-6 flex items-center gap-2'>Learn More<img className='w-4' src={arrow} alt="" /></button>
            </div>
        </div>
    </div>
  )
}

export default Hero