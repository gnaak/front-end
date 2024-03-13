import { Suspense, useEffect, useState, useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import * as THREE from "three";
import { connect } from "react-redux";
import BoardProps from "../types/BoardProps";
// ['0', '1', ... , '30', '24']
// const animationNames = Array.from({ length: 32 }, (_, index) => `${index}`);

const Board: React.FC<BoardProps> = ({ currentLocation }) => {
  const mapPath = "/public/untitled.gltf";
  const map = useLoader(GLTFLoader, mapPath);
  const position = [-3, -13, -3];
  const rotation = [0, 0, 0];
  const scale = [1.5, 1.5, 1.5];

  const mixer: THREE.AnimationMixer = new THREE.AnimationMixer(map.scene);

  // 맵 인덱싱 방법
  // console.log(map.scene.children)
  console.log(currentLocation);
  const PlayAnimation = () => {
    const animations: THREE.AnimationClip[] = map.animations;
      const animation = animations[currentLocation];
      const action = mixer.clipAction(animation);
      action.reset();
      action.setLoop(THREE.LoopOnce, 1);
      action.clampWhenFinished = true;
      action.play();
    
    animate();
  };
  useEffect(() => {
    if (currentLocation) {
      PlayAnimation();
    }
  });

  const clock = new THREE.Clock();

  const animate = () => {
    if (mixer) {
      const delta = clock.getDelta();
      mixer.update(delta);
      requestAnimationFrame(animate);
    }
  };

  return (
    <Suspense fallback={null}>
      <primitive
        object={map.scene}
        position={position}
        rotation={rotation}
        scale={scale}
      ></primitive>
    </Suspense>
  );
};

const mapStateToProps = (state) => ({
  currentLocation: state.currentLocation.currentLocation,
});
export default connect(mapStateToProps)(Board);
