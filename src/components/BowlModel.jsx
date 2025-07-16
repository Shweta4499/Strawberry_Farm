// src/components/BowlModel.jsx
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function BowlModel() {
  const ref = useRef()
  const { scene } = useGLTF('/models/bowl.glb')
  const targetRotation = useRef(new THREE.Euler())

  useFrame(({ mouse }) => {
    if (!ref.current) return

    // Mouse-based target rotation
    targetRotation.current.y = mouse.x * 0.4
    targetRotation.current.x = mouse.y * 0.2

    // Smoothly follow mouse rotation
    ref.current.rotation.x += (targetRotation.current.x - ref.current.rotation.x) * 0.05
    ref.current.rotation.y += (targetRotation.current.y - ref.current.rotation.y) * 0.05

    // Add slow auto-rotation on top
    ref.current.rotation.y += 0.005
  })

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={0.1}
      position={[0, 0.25, 0]}
    />
  )
}
