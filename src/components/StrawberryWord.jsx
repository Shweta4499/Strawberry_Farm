// src/components/StrawberryWord.jsx
import React from "react";
import strawberry from "../assets/strawberry.png"; // adjust path

export default function StrawberryWord() {
  return (
    <>
      {/* Full version shown on medium+ screens */}
      <div className="detailed-version strawberry-word">
        <span>S</span>
        <span>T</span>
        <span>R</span>
        <span>A</span>
        <div className="letter-with-model">
          <img src={strawberry} alt="Strawberry" />
        </div>
        <span>B</span>
        <span>E</span>
        <span>R</span>
        <span>R</span>
        <span>Y</span>
      </div>

      {/* Fallback: Simple, compact version for small screens */}
      <div className="fallback-version">
        STRAW🍓BERRY
      </div>
    </>
  );
}
