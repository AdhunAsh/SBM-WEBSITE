import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Choose from './components/Choose'

const App = () => {
  return (
    <div className=' px-25 py-3'>
        <Navbar />
        <Hero />
        <Choose />

    </div>
  )
}

export default App