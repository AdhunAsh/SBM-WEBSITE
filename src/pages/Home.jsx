import React from 'react'
import Hero from '../components/Hero'
import Contact from '../components/Contact'
import Market from '../components/Market'
import Solutions from '../components/Solutions'
import Responsibilities from '../components/Responsibilities'
import Terms from '../components/Terms'
import Resources from '../components/Resources'
import GlobalShippingDottedMap from '../components/worldmap'
import Choose from '../components/Choose'

const Home = () => {
  return (
    <div className='bg-white ' id='home'>
      <div className='bg-white px-5 '><Hero /></div>
      <div id='markets'><Market /></div>
      <div id='solutions'><Solutions /></div>
      <GlobalShippingDottedMap />
      <div id='responsibilities'><Responsibilities /></div>
      <div id='terms'><Terms /></div>
      <div id='resources'><Resources /></div>
      <div id='contact'><Contact /></div>
    </div>
  )
}

export default Home