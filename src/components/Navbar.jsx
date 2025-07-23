// components/Navbar.jsx
import React, { useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (id) => {
    setMenuOpen(false);
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">🍓 Strawberry</div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><a onClick={() => handleLinkClick("home")}>Home</a></li>
          <li><a onClick={() => handleLinkClick("about")}>About</a></li>
          <li><a onClick={() => handleLinkClick("recipes")}>Products</a></li>
          <li><a onClick={() => handleLinkClick("contact")}>Contact</a></li>
        </ul>

        <div className="hamburger" onClick={handleToggle}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
