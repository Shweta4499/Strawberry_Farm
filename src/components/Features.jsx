import React from 'react'
import '../styles/Features.css'

export default function Features() {
  return (
    <section id='features'className="features-section">
      <div className="features-image">
        <img src="/img/organic.jpg" alt="Organic Strawberry Farm" />
      </div>
      <div className="features-text">
        <h2>Why Our Berries Are Better</h2>
        <ul>
          <li>✅ 100% Organic and pesticide-free</li>
          <li>✅ Sustainably grown in local soil</li>
          <li>✅ Packed with nutrients and antioxidants</li>
          <li>✅ Hand-picked at peak ripeness</li>
        </ul>
      </div>
    </section>
  )
}
