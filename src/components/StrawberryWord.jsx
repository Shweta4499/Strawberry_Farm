// src/components/StrawberryWord.jsx
import React from 'react'
import '../styles/StrawberryWord.css' // if styles are separate

export default function StrawberryWord() {
  return (
    <div className="strawberry-word">
      <span>S</span>
      <span>T</span>
      <span>R</span>
      <span className="letter-with-img">
        <img src="/img/strawberry.png" alt="Strawberry" className="strawberry-img" />
      </span>
      <span>W</span>
      <span>B</span>
      <span>E</span>
      <span>R</span>
      <span>R</span>
      <span>I</span>
      <span>E</span>
      <span>S</span>
    </div>
  )
}
