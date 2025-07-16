import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Recipes from './components/Recipes'
import Navbar from './components/Navbar'
import StrawberryRain from './components/StrawberryRain'

import StrawberryScrollAnimation from './components/StrawberryScrollAnimation'
// import Gallery from './components/Gallery'
// import Products from './components/Products'
import Contact from './components/Contact'
 import FloatingStrawberry from './components/FloatingStrawberry'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)


function App() {
  return (
    <div className="App">
       <div className="main-wrapper">
       <StrawberryRain />
      <Navbar/>
      <Hero />
      <About />
      <Features />
      <Recipes/>
      {/* <Gallery /> */}
      {/* <Products /> */}
       <Contact /> 
       </div>
      {/* <FloatingStrawberry /> */}
    </div>
  )
}

export default App
