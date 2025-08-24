import React from 'react'
import Hero from '../components/Hero'
import Market from '../components/Market'
import Solutions from '../components/Solutions'
import Responsibilities from '../components/Responsibilities'
import Terms from '../components/Terms'
import Resources from '../components/Resources'
import Choose from '../components/Choose'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='bg-gradient-to-br from-[#F9B500]/5 via-white to-[#F9B500]/10' id='home'>
      <Hero />
      <div id='markets'><Market /></div>
      <div id='solutions'><Solutions /></div>
      <div id='choose'><Choose /></div>
      <div id='responsibilities'><Responsibilities /></div>
      <div id='terms'><Terms /></div>
      <div id='resources'><Resources /></div>
      <div id='contact'><Footer /></div>
    </div>
  )
}

export default Home