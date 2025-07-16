// src/components/Contact.jsx
import React from 'react'
import BowlModel from './BowlModel'
import { Canvas } from '@react-three/fiber'
import '../styles/Contact.css'

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-content">
        {/* Left: Contact Form */}
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Your Message"></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        </div>

        {/* Right: Bowl Model and CTA */}
        <div className="bowl-side">
          <div className="bowl-model-container">
            <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
              <ambientLight intensity={0.6} />
              <directionalLight position={[3, 3, 3]} />
              <BowlModel />
            </Canvas>
          </div>
          <div className="bowl-cta">
            Get your strawberry basket now!
          </div>
        </div>
      </div>
    </section>
  )
}
