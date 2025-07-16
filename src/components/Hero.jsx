// src/components/Hero.jsx
import React from 'react'
import '../styles/Hero.css'
import AnimatedAdjectives from './AnimatedAdjectives'
import StrawberryWord from './StrawberryWord'

export default function Hero() {
  return (
    <section id='home'className="hero-section">
      <div className="hero-text-wrapper">
        <h1 className="hero-adjective"><AnimatedAdjectives /></h1>
        <h2 className="hero-title">
          <StrawberryWord />
        </h2>
      </div>
    </section>
  )
}
