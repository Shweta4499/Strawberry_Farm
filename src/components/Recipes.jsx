// src/components/Recipes.jsx
import React, { useEffect, useRef } from 'react'
import '../styles/Recipes.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Recipes() {
  const sectionRef = useRef()
  const cardsRef = useRef([])

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    )

    cardsRef.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          delay: index * 0.2,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
          },
        }
      )
    })
  }, [])

  return (
    <section id='recipes'className="recipes-section" ref={sectionRef}>
      <h2>Strawberry Delights</h2>
      <p>Try these fresh and simple recipes made with our sweet, organic strawberries.</p>
      <div className="recipe-cards">
        {['Strawberry Smoothie', 'Berry Pancakes', 'Strawberry Tart'].map((title, i) => (
          <div
            className="recipe-card"
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
          >
            <img src={`/img/recipe${i + 1}.jpg`} alt={title} />
            <h3>{title}</h3>
            <p>Delicious and easy-to-make with just a few ingredients.</p>
          </div>
        ))}
      </div>
    </section>
  )
}
