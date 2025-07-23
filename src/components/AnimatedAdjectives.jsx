import React, { useState, useEffect } from 'react';

const adjectives = ['SWEET', 'FRESH', 'JUICY', 'ORGANIC', 'TASTY', 'LOCAL'];

export default function AnimatedAdjectives() {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = adjectives[wordIndex];
    const typingSpeed = isDeleting ? 80 : 150;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (charIndex < currentWord.length) {
          setDisplayText(prev => prev + currentWord.charAt(charIndex));
          setCharIndex(prev => prev + 1);
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        // Deleting
        if (charIndex > 0) {
          setDisplayText(prev => prev.slice(0, -1));
          setCharIndex(prev => prev - 1);
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % adjectives.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex]);

  return (
    <div className="hero-adjective-wrapper">
      <span className="typing-placeholder">ORGANIC</span> {/* Longest word for layout */}
      <span className="typing-text">{displayText}</span>
    </div>
  );
}
