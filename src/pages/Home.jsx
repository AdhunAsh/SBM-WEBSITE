import React from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Choose from '../components/Choose'
import Sample from '../components/Sample'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div>
        <Hero />
        <Choose />
        <Sample />
        <Contact />
    </div>
  )
}

export default Home