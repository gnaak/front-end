// import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

const Monkey = () => {
  const monkeyPath = "/public/monkey.gltf" 
  const monkey = useLoader(GLTFLoader, monkeyPath);
  const position = [0, -8, -4];
  const rotation = [0, Math.PI/4,0]
  return <primitive object={monkey.scene} position={position} rotation={rotation}></primitive>;
}

export default Monkey;