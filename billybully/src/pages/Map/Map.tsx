import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  ContactShadows,
  OrthographicCamera,
} from "@react-three/drei";
import Monkey from "../../components/Monkey";
import Board from "../../components/Board";
import Dice from "../../components/Dice";
import { Provider } from "react-redux";
import store from "../../store/index";

function Map() {
  return (
    <>
      <Provider store={store}>
        <Canvas
          style={{
            height: "100vh",
            width: "85vw",
            backgroundColor: "black",
          }}
        >
          <ambientLight intensity={1} />
          <OrthographicCamera makeDefault zoom={62} position={[4, 4, 4]} />
          <OrbitControls
            // enableRotate={false}
            enableZoom={false} />
          <Suspense fallback={null}>
            <Board />
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
        </Canvas>
        <Dice />
      </Provider>
    </>
  );
}
export default Map;
