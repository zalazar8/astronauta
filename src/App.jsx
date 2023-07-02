import { Environment, OrbitControls, Stars, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Astronauta } from './components/Astronauta'

function App() {
  return (
    <>
      <div className='app'>
        <section className='hero'>
          <h1>Web 3D - Perdido en el espacio</h1>
          <h3>Por MOZ.ART</h3>
        </section>
      </div>
      <Canvas className='canvas' shadows camera={{ position: [-5, -5, 12], fov: 15}}>
      
        <OrbitControls />
        <Astronauta />
        <Environment preset='sunset' />
        <ambientLight />
        <Stars radius={50} depth={200} count={1000} factor={20} saturation={0} fade speed={1} />
      </Canvas>
    </>
  )
}

export default App
