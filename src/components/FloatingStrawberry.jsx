import React, { useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function FloatingStrawberryModel() {
  const modelRef = useRef()
  const { scene } = useGLTF('/models/fresh_strawberry.glb')

  // Rotation and drifting motion
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.003
      modelRef.current.position.x = Math.sin(Date.now() * 0.0006) * 0.3
      modelRef.current.position.z = Math.cos(Date.now() * 0.0004) * 0.1
    }
  })

  useEffect(() => {
    const model = modelRef.current
    if (!model) return

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    })

    // Move model down slowly
    tl.to(model.position, {
      y: -3,
      ease: 'power1.out',
    }, 0)

    // Gradually scale up
    tl.to(model.scale, {
      x: 12,
      y: 12,
      z: 12,
      ease: 'power2.out',
    }, 0)

    ScrollTrigger.refresh()

    return () => {
      tl.scrollTrigger?.kill()
      tl.kill()
    }
  }, [])

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={15} // Initial scale
      position={[0, 2.5, 0]} // Start slightly above the view
    />
  )
}

export default function FloatingStrawberry() {
  return (
    <div className="floating-strawberry">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 5,
        }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 2]} />
        <FloatingStrawberryModel />
      </Canvas>
    </div>
  )
}
