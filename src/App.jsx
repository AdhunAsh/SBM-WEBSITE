import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Nav from './components/Nav';

const App = () => {
  return (
    <div>
      <Nav />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App

//  px-25 py-3