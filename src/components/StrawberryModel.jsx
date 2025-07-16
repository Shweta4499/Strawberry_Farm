// src/components/StrawberryModel.jsx
import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function StrawberryModel() {
  const ref = useRef()
  const { scene } = useGLTF('/models/fresh_strawberry.glb')

  useEffect(() => {
    if (ref.current) {
      ref.current.rotation.x = 0
      ref.current.rotation.y = Math.PI / 2 // Stand upright
      ref.current.rotation.z = 0
    }
  }, [])

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.005 // Rotate around Y axis only
    }
  })

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={45}
      position={[0, -0.5, 0]}
    />
  )
}
