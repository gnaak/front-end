import { Suspense } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  ContactShadows,
  OrthographicCamera,
} from "@react-three/drei";
import Map from "./components/Map";
import Monkey from "./components/Monkey";
import Dice from "./components/Dice";

function App() {
  return (
    <>
      <Canvas>
        <ambientLight intensity={1} />
        <OrthographicCamera makeDefault zoom={32} position={[4, 4, 4]} />
        <OrbitControls />
        <Suspense fallback={null}>
          <Map />
          <Monkey />
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
        <Dice />
      </Canvas>
    </>
  );
}
export default App;
