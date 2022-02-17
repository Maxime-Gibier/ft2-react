import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/eolienne.gltf')

  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={[0.4, 0.4, 0.47]}>
            <mesh geometry={nodes.Object_4.geometry} material={nodes.Object_4.material}/>
          </group>
          <group position={[0, 13.16, 0.56]} scale={[0.4, 0.4, 0.47]}>
            <mesh geometry={nodes.Object_6.geometry} material={nodes.Object_6.material}/>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/eolienne.gltf')
