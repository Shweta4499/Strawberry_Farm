// src/components/StrawberryRain.jsx
import React, { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

const COUNT = 17

function StrawberryRainGroup({ isMobile }) {
  const { scene } = useGLTF('/models/fresh_strawberry.glb')
  const groupRef = useRef()

  const strawberries = useMemo(() => {
    return new Array(COUNT).fill().map(() => ({
      baseX: (Math.random() - 0.5) * 10,
      baseZ: (Math.random() - 0.5) * 10,
      position: new THREE.Vector3(
        0,
        Math.random() * 10 + 5,
        0
      ),
      swaySpeed: Math.random() * 0.5 + 0.2,
      fallSpeed: Math.random() * 0.02 + 0.005,
      rotationSpeed: Math.random() * 0.02 + 0.005,
      phase: Math.random() * Math.PI * 2,
      scale: isMobile
        ? Math.random() * 0.3 + 10    // smaller scale on mobile
        : Math.random() * 0.6 + 20,  // larger on desktop
    }))
  }, [isMobile])

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    strawberries.forEach((straw, idx) => {
      const mesh = groupRef.current.children[idx]
      if (!mesh) return

      straw.position.y -= straw.fallSpeed
      if (straw.position.y < -5) {
        straw.position.y = Math.random() * 10 + 5
      }

      const sway = Math.sin(t * straw.swaySpeed + straw.phase)
      const x = straw.baseX + sway * 0.5
      const z = straw.baseZ + Math.cos(t * straw.swaySpeed + straw.phase) * 0.5

      mesh.position.set(x, straw.position.y, z)
      mesh.rotation.y += straw.rotationSpeed
      mesh.rotation.x += straw.rotationSpeed * 0.5

      const pulse = 1 + Math.sin(t * 2 + straw.phase) * 0.02
      mesh.scale.setScalar(straw.scale * pulse)
    })
  })

  return (
    <group ref={groupRef}>
      {strawberries.map((straw, i) => (
        <primitive
          key={i}
          object={scene.clone()}
          position={straw.position}
          scale={straw.scale}
        />
      ))}
    </group>
  )
}

export default function StrawberryRain() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="strawberry-rain">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      >
        <ambientLight intensity={0.8} />
        <directionalLight position={[5, 5, 5]} />
        <StrawberryRainGroup isMobile={isMobile} />
      </Canvas>
    </div>
  )
}
