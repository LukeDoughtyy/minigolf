import { OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'
import { Perf } from 'r3f-perf'
import { useRef } from 'react'
import { BoxGeometry, Mesh, MeshBasicMaterial } from 'three'
import { Cube } from './Cube'
import { Plane } from './Plane'
import { Sphere } from './Sphere'

function Scene() {
  const { performance } = useControls('Monitoring', {
    performance: false,
  })

  const cubeRef = useRef<Mesh<BoxGeometry, MeshBasicMaterial>>(null)

  useFrame((_, delta) => {
    cubeRef.current!.rotation.y += delta / 3
  })

  return (
    <>
      {performance && <Perf position='top-left' />}

      <OrbitControls makeDefault />

      <directionalLight position={[-2, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.2} />

      <Cube ref={cubeRef} />
      <Sphere />
      <Plane />
    </>
  )
}

export { Scene }
