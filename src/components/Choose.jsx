import React from 'react'
import people from '../assets/icons/two-people.png'
import support from '../assets/icons/customer-support.png'
import tag from '../assets/icons/tag.png'
import marine from '../assets/icons/cargo-ship.png'
import flight from '../assets/icons/flight.png'
import truck from '../assets/icons/cargo-truck.png'
import mine from '../assets/icons/mining-truck.png'
import car from '../assets/icons/sports-car.png'
import container from '../assets/icons/container.png'

const Choose = () => {
  return (
    <div className='flex flex-col mt-20'>
        <p className='font-bold text-4xl'>Why choose us?</p>
        <div className='flex flex-row mt-10 justify-between gap-5'>
            <div className='px-4'>
                <img className='w-8' src={people} alt="" />
                <p className='mt-7 font-semibold'>Top Team</p>
                <p className='mt-5 text-gray-500 font-medium'>Sometimes features require a short description. This can be detailed description or just a short text.</p>
                <p className='mt-5 text-blue-600 font-medium'>Learn More →</p>
            </div>

            <div className='px-4'>
                <img className='w-9' src={support} alt="" />
                <p className='mt-7 font-semibold'>Customer Support</p>
                <p className='mt-5 text-gray-500 font-medium'>Sometimes features require a short description. This can be detailed description or just a short text.</p>
                <p className='mt-5 text-blue-600 font-medium'>Learn More →</p>
            </div>

            <div className='px-4'>
                <img className='w-4 sm:w-6 md:w-8 ' src={tag} alt="" />
                <p className='mt-7 font-semibold'>Competetive Rules</p>
                <p className='mt-5 text-gray-500 font-medium'>Sometimes features require a short description. This can be detailed description or just a short text.</p>
                <p className='mt-5 text-blue-600 font-medium'>Learn More →</p>
            </div>
        </div>

        <hr className='mt-15 border-gray-300'></hr>

        <p className='mt-15 font-bold text-4xl leading-10'>Services We Offer</p>

        <div className='flex flex-row mt-10 justify-between gap-5'>
            <div className='px-4'>
                <img className='w-9' src={marine} alt="" />
                <p className='mt-7 font-semibold'>Marine Cargo Service</p>
                <p className='mt-5 text-gray-500 font-medium'>Sometimes features require a short description. This can be detailed description or just a short text.</p>
            </div>

            <div className='px-4'>
                <img className='w-9' src={flight} alt="" />
                <p className='mt-7 font-semibold'>Air Cargo Service</p>
                <p className='mt-5 text-gray-500 font-medium'>Sometimes features require a short description. This can be detailed description or just a short text.</p>
            </div>

            <div className='px-4'>
                <img className='w-9' src={truck} alt="" />
                <p className='mt-7 font-semibold'>Inland Cargo Service</p>
                <p className='mt-5 text-gray-500 font-medium'>Sometimes features require a short description. This can be detailed description or just a short text.</p>
            </div>
        </div>

        <hr className='mt-15 mb-5 border-gray-300'></hr>

    </div>
  )
}

export default Choose