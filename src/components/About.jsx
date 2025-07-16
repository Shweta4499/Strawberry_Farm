// src/components/About.jsx
import React, { useRef } from 'react'
import '../styles/About.css'

export default function About() {
  const textRef = useRef()
  const videoRef = useRef()

  return (
    <section id="about" className="about-section">
      <div className="about-content" ref={textRef}>
        <h2>Naturally Grown, Naturally Loved</h2>
        <p>
          Our strawberries are grown with love and sunshine — picked at peak
          ripeness to give you the freshest flavor in every bite.
        </p>
      </div>

      <div className="about-image" ref={videoRef}>
        <video
          src="/videos/farm.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </div>
    </section>
  )
}
