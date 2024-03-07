import { useEffect, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import * as THREE from "three";

// ['0', '1', '2', ... , '24']
// const animationIdx = Array.from({length:24}, (_,index)=>`${index}`)

const Map = () => {
  const mapPath = "/public/untitled.gltf";
  const map = useLoader(GLTFLoader, mapPath);
  const position = [-22, -10, 5];
  const rotation = [3.1, -0.1, 3.2];
  const scale = [1.3, 1.3, 1.3]
  const mixer: THREE.AnimationMixer = new THREE.AnimationMixer(map.scene);
  
  // 맵 인덱싱 방법
  // console.log(map.scene.children)

  const handleClick = () => {
    const animations: THREE.AnimationClip[] = map.animations;
    const animation = animations[1];
    // console.log(animation)
    const action = mixer.clipAction(animation);
    action.reset();
    action.setLoop(THREE.LoopOnce, 1);
    action.clampWhenFinished = true;
    action.play();

    animate();
  };

  const clock = new THREE.Clock();

  const animate = () => {
    if (mixer) {
      const delta = clock.getDelta();
      mixer.update(delta);
      requestAnimationFrame(animate);
    }
  };

  return (
    <primitive
      object={map.scene}
      position={position}
      rotation={rotation}
      scale={scale}
      onClick={handleClick}
    ></primitive>
  );
};

export default Map;
