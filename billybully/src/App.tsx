import { Suspense } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, ContactShadows, OrthographicCamera } from '@react-three/drei'
import Earth from '../public/Untitled'

function App() {
  
  return (
    <>
      <Canvas>
        <ambientLight intensity={1} />
        <OrthographicCamera makeDefault zoom={64} position={[-0, 1, -0]} />
        <OrbitControls />
        <Suspense fallback={null}>
          <Earth
            position={[-10, -20, 0]}
            rotation={[2.3,0.4,3.3]}
          />
        </Suspense>
        <Environment preset="sunset" />
        <ContactShadows
          position={[-0, 4, -1]}
          opacity={1}
          scale={500}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        />
      </Canvas>
    </>
  );
}
export default App
