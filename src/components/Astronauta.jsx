import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Astronauta(props) {
  const { nodes, materials } = useGLTF('./models/astronauta.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Astronauta.geometry} material={materials.TexMap} position={[0.059, 0, -0.167]} rotation={[Math.PI / 2, 45, -0.75]} />
    </group>
  )
}

useGLTF.preload('./models/astronauta.gltf')
