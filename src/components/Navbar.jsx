// src/components/Navbar.jsx
import React, { useState } from 'react'
import '../styles/Navbar.css'  

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          🍓 <span>Fresh Strawberries</span>
        </div>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#recipes" onClick={() => setMenuOpen(false)}>Products</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>

        <div className="hamburger" onClick={toggleMenu}>
          <div className={`line ${menuOpen ? 'rotate1' : ''}`}></div>
          <div className={`line ${menuOpen ? 'fade' : ''}`}></div>
          <div className={`line ${menuOpen ? 'rotate2' : ''}`}></div>
        </div>
      </div>
    </nav>
  )
}
