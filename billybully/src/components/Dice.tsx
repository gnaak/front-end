// import React from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

const Dice = () => {
  const dicePath = "/public/dice.gltf";
  const dice = useLoader(GLTFLoader, dicePath);
  const position = [2, -8, 2];
  const scale = [0.2,0.2,0.2]
  const rotation = [0, Math.PI / 4, 0];
  console.log(dice)
  return (
    <primitive
      object={dice.scene}
      position={position}
      rotation={rotation}
      scale={scale}
    ></primitive>
  );
};

export default Dice;
