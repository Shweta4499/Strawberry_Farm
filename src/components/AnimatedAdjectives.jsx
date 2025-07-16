// src/components/AnimatedAdjectives.jsx
import React, { useState, useEffect } from 'react'

const adjectives = ['SWEET', 'FRESH', 'JUICY', 'ORGANIC', 'TASTY', 'LOCAL']

export default function AnimatedAdjectives() {
  const [displayText, setDisplayText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const currentWord = adjectives[wordIndex]

    const timeout = setTimeout(() => {
      if (charIndex < currentWord.length) {
        setDisplayText(prev => prev + currentWord[charIndex])
        setCharIndex(prev => prev + 1)
      } else {
        // Pause before deleting
        setTimeout(() => {
          setDisplayText('')
          setCharIndex(0)
          setWordIndex((wordIndex + 1) % adjectives.length)
        }, 1000)
      }
    }, 150)

    return () => clearTimeout(timeout)
  }, [charIndex, wordIndex])

  return (
    <div className="hero-adjective-wrapper">
      <span className="typing-placeholder">ORGANIC</span> {/* Longest word for layout */}
      <span className="typing-text">{displayText}</span>
    </div>
  )
}
