import { Suspense } from 'react'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, ContactShadows } from '@react-three/drei'
import Earth from '../public/Untitled'
function App() {
  return (
    <>
      <Canvas>
        <ambientLight intensity={1} />
        <OrbitControls/>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
        <Environment preset="sunset" />
        <ContactShadows position={[0,-1,0]}
        opacity={0.8}
          scale={30}
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
