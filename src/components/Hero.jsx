import React from 'react'
import logi4 from '../assets/logis/logi4.jpg'

const Hero = () => {
  return (
    <div className='flex flex-col'>
        <div className='flex flex-col xl:flex-row '>
            <div className='w-3/4 mt-10'>
                <p className='text-5xl font-semibold leading-13'>We provide logistics <br></br> solution tailor-made <br></br>for individual customer!</p>
            </div>
            <div className='w-1/4 mt-31'>
                <p className='text-md text-gray-500'>SBM Cargo Services provides customized services for customers around the world from 50+ leading industries.</p>
            </div>
        </div>

        <div>
            <img className='w-full h-[500px] mt-10' src= {logi4} alt=''/>
        </div>

    </div>
  )
}

export default Hero