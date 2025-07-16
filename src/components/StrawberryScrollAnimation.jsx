import React, { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function FloatingStrawberry() {
  const ref = useRef()
  const { scene } = useGLTF('/models/fresh_strawberry.glb')

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01
      ref.current.position.y += Math.sin(Date.now() * 0.002) * 0.002
    }
  })

  useEffect(() => {
    if (!ref.current) return

    gsap.to(ref.current.position, {
      y: -10,
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
      ease: 'none',
    })

    gsap.to(ref.current.position, {
      x: 1.5,
      z: -2,
      scrollTrigger: {
        trigger: '.contact-section',
        start: 'top bottom',
        end: 'top center',
        scrub: true,
      },
      ease: 'none',
    })
  }, [])

  return <primitive object={scene} scale={8} position={[0, 5, 0]} ref={ref} />
}

export default function StrawberryScrollAnimation() {
  return (
    <div className="floating-strawberry">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <FloatingStrawberry />
      </Canvas>
    </div>
  )
}
