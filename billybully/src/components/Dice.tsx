import React, { useRef } from "react";
import * as CANNON from "cannon-es";
import * as THREE from "three";
import * as BufferGeometryUtils from "three/addons/utils/BufferGeometryUtils.js";
import { connect } from "react-redux";
import { setTotalScore } from "../store/reducer";
import { Dispatch } from "@reduxjs/toolkit";
import DiceProps from "../types/DiceProps";
import rollDice from "../assets/dice.png";
const Dice: React.FC<DiceProps> = ({ totalScore, setTotalScore }) => {
  const canvasRef = useRef(null);
  let renderer: THREE.WebGLRenderer | null;
  let scene: THREE.Scene | null;
  let camera: THREE.PerspectiveCamera | null;
  let diceMesh: THREE.Group<THREE.Object3DEventMap> | null;
  let physicsWorld: CANNON.World;

  //화면 띄우기
  const initScene = () => {
    renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      canvas: canvasRef.current ?? undefined,
    });

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(80, 400, 6, 3000);
    //카메라 위치
    camera.position.set(2, 5, -1).multiplyScalar(1);
    camera.zoom = 1.5;
    const ambientLight = new THREE.AmbientLight(0xffffff, 3);
    scene.add(ambientLight);

    diceMesh = createDiceMesh();

    createFloor();
    updateSceneSize();
  };

  //중력
  const initPhysics = () => {
    physicsWorld = new CANNON.World({
      allowSleep: true,
      gravity: new CANNON.Vec3(0, -40, 0),
    });
  };
  const params = {
    numberOfDice: 2,
    segments: 40,
    edgeRadius: 0.17,
    notchRadius: 0.12,
    notchDepth: 0.1,
  };
  const diceArray: { mesh: THREE.Group; body: CANNON.Body }[] = [];

  const createFloor = () => {
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(1000, 1000),
      new THREE.ShadowMaterial({
        opacity: 1,
      })
    );
    floor.receiveShadow = true;
    floor.position.y = 1;
    floor.quaternion.setFromAxisAngle(
      new THREE.Vector3(-1, 0, 0),
      Math.PI * 0.5
    );
    scene!.add(floor);

    // Convert THREE.Vector3 to CANNON.Vec3 for position
    const floorBodyPosition = new CANNON.Vec3(
      floor.position.x,
      floor.position.y,
      floor.position.z
    );

    // Convert THREE.Quaternion to CANNON.Quaternion for quaternion
    const floorBodyQuaternion = new CANNON.Quaternion(
      floor.quaternion.x,
      floor.quaternion.y,
      floor.quaternion.z,
      floor.quaternion.w
    );

    const floorBody = new CANNON.Body({
      type: CANNON.Body.STATIC,
      shape: new CANNON.Plane(),
      position: floorBodyPosition,
      quaternion: floorBodyQuaternion,
    });
    physicsWorld.addBody(floorBody);
  };

  //주사위 속성
  const createDiceMesh = () => {
    const boxMaterialOuter = new THREE.MeshStandardMaterial({
      color: 0xeeeeee,
    });
    const boxMaterialInner = new THREE.MeshStandardMaterial({
      color: 0x000000,
      roughness: 0,
      metalness: 1,
      side: THREE.DoubleSide,
    });

    const diceMesh = new THREE.Group();
    const innerMesh = new THREE.Mesh(createInnerGeometry(), boxMaterialInner);
    const outerMesh = new THREE.Mesh(createBoxGeometry(), boxMaterialOuter);
    outerMesh.castShadow = true;
    diceMesh.add(innerMesh, outerMesh);

    return diceMesh;
  };

  const createDice = (): { mesh: THREE.Group; body: CANNON.Body } => {
    const mesh = diceMesh!.clone();
    scene!.add(mesh);

    const body = new CANNON.Body({
      mass: 1,
      shape: new CANNON.Box(new CANNON.Vec3(0.5, 0.5, 0.5)),
      sleepTimeLimit: 0.4,
    });
    physicsWorld.addBody(body);

    return { mesh, body };
  };

  const createBoxGeometry = () => {
    const boxGeometry = new THREE.BoxGeometry(
      1,
      1,
      1,
      params.segments,
      params.segments,
      params.segments
    );

    const positionAttr = boxGeometry.attributes.position;
    const subCubeHalfSize = 0.5 - params.edgeRadius;

    for (let i = 0; i < positionAttr.count; i++) {
      let position = new THREE.Vector3().fromBufferAttribute(positionAttr, i);

      const subCube = new THREE.Vector3(
        Math.sign(position.x),
        Math.sign(position.y),
        Math.sign(position.z)
      ).multiplyScalar(subCubeHalfSize);
      const addition = new THREE.Vector3().subVectors(position, subCube);

      if (
        Math.abs(position.x) > subCubeHalfSize &&
        Math.abs(position.y) > subCubeHalfSize &&
        Math.abs(position.z) > subCubeHalfSize
      ) {
        addition.normalize().multiplyScalar(params.edgeRadius);
        position = subCube.add(addition);
      } else if (
        Math.abs(position.x) > subCubeHalfSize &&
        Math.abs(position.y) > subCubeHalfSize
      ) {
        addition.z = 0;
        addition.normalize().multiplyScalar(params.edgeRadius);
        position.x = subCube.x + addition.x;
        position.y = subCube.y + addition.y;
      } else if (
        Math.abs(position.x) > subCubeHalfSize &&
        Math.abs(position.z) > subCubeHalfSize
      ) {
        addition.y = 0;
        addition.normalize().multiplyScalar(params.edgeRadius);
        position.x = subCube.x + addition.x;
        position.z = subCube.z + addition.z;
      } else if (
        Math.abs(position.y) > subCubeHalfSize &&
        Math.abs(position.z) > subCubeHalfSize
      ) {
        addition.x = 0;
        addition.normalize().multiplyScalar(params.edgeRadius);
        position.y = subCube.y + addition.y;
        position.z = subCube.z + addition.z;
      }

      const notchWave = (v: number) => {
        v = (1 / params.notchRadius) * v;
        v = Math.PI * Math.max(-1, Math.min(1, v));
        return params.notchDepth * (Math.cos(v) + 1);
      };
      const notch = (pos: number[]) => notchWave(pos[0]) * notchWave(pos[1]);

      const offset = 0.23;

      if (position.y === 0.5) {
        position.y -= notch([position.x, position.z]);
      } else if (position.x === 0.5) {
        position.x -= notch([position.y + offset, position.z + offset]);
        position.x -= notch([position.y - offset, position.z - offset]);
      } else if (position.z === 0.5) {
        position.z -= notch([position.x - offset, position.y + offset]);
        position.z -= notch([position.x, position.y]);
        position.z -= notch([position.x + offset, position.y - offset]);
      } else if (position.z === -0.5) {
        position.z += notch([position.x + offset, position.y + offset]);
        position.z += notch([position.x + offset, position.y - offset]);
        position.z += notch([position.x - offset, position.y + offset]);
        position.z += notch([position.x - offset, position.y - offset]);
      } else if (position.x === -0.5) {
        position.x += notch([position.y + offset, position.z + offset]);
        position.x += notch([position.y + offset, position.z - offset]);
        position.x += notch([position.y, position.z]);
        position.x += notch([position.y - offset, position.z + offset]);
        position.x += notch([position.y - offset, position.z - offset]);
      } else if (position.y === -0.5) {
        position.y += notch([position.x + offset, position.z + offset]);
        position.y += notch([position.x + offset, position.z]);
        position.y += notch([position.x + offset, position.z - offset]);
        position.y += notch([position.x - offset, position.z + offset]);
        position.y += notch([position.x - offset, position.z]);
        position.y += notch([position.x - offset, position.z - offset]);
      }
      positionAttr.setXYZ(i, position.x, position.y, position.z);
    }
    return boxGeometry;
  };

  const createInnerGeometry = () => {
    const baseGeometry = new THREE.PlaneGeometry(
      1 - 2 * params.edgeRadius,
      1 - 2 * params.edgeRadius
    );
    const offset = 0.48;

    const mergedGeometry = BufferGeometryUtils.mergeGeometries([
      baseGeometry.clone().translate(0, 0, offset),
      baseGeometry.clone().translate(0, 0, -offset),
      baseGeometry
        .clone()
        .rotateX(0.5 * Math.PI)
        .translate(0, -offset, 0),
      baseGeometry
        .clone()
        .rotateX(0.5 * Math.PI)
        .translate(0, offset, 0),
      baseGeometry
        .clone()
        .rotateY(0.5 * Math.PI)
        .translate(-offset, 0, 0),
      baseGeometry
        .clone()
        .rotateY(0.5 * Math.PI)
        .translate(offset, 0, 0),
    ]);

    return mergedGeometry;
  };
  let finalScore = 0;
  const diceMaking = () => {
    for (let i = 0; i < params.numberOfDice; i++) {
      const dice = createDice();
      diceArray.push(dice);
      addDiceEvents(dice);
    }
  };

  const addDiceEvents = (dice: { body: CANNON.Body; mesh: THREE.Group }) => {
    dice.body.addEventListener(
      "sleep",
      (e: { target: { quaternion: CANNON.Quaternion } }) => {
        dice.body.allowSleep = true;
        const euler = new CANNON.Vec3();
        e.target.quaternion.toEuler(euler);

        const eps = 0.1;
        const isZero = (angle: number) => Math.abs(angle) < eps;
        const isHalfPi = (angle: number) =>
          Math.abs(angle - 0.5 * Math.PI) < eps;
        const isMinusHalfPi = (angle: number) =>
          Math.abs(0.5 * Math.PI + angle) < eps;
        const isPiOrMinusPi = (angle: number) =>
          Math.abs(Math.PI - angle) < eps || Math.abs(Math.PI + angle) < eps;
        //TODO: interval
        if (isZero(euler.z)) {
          if (isZero(euler.x)) {
            finalScore += 1;
          } else if (isHalfPi(euler.x)) {
            finalScore += 4;
          } else if (isMinusHalfPi(euler.x)) {
            finalScore += 3;
          } else if (isPiOrMinusPi(euler.x)) {
            finalScore += 6;
          } else {
            dice.body.allowSleep = true;
          }
        } else if (isHalfPi(euler.z)) {
          finalScore += 2;
        } else if (isMinusHalfPi(euler.z)) {
          finalScore += 5;
        } else {
          dice.body.allowSleep = true;
        }

        setTimeout(() => {
          setTotalScore(finalScore);
        }, 1000);
        console.log("finalScore:", finalScore);
        setTotalScore(0)
      }
    );
  };

  function render() {
    physicsWorld.fixedStep();

    for (const dice of diceArray) {
      dice.mesh.position.copy(dice.body.position);
      dice.mesh.quaternion.copy(dice.body.quaternion);
    }

    renderer!.render(scene!, camera!);
    requestAnimationFrame(render);
  }

  function updateSceneSize() {
    if (camera && renderer) {
      camera.aspect = 1.44;
      camera.updateProjectionMatrix();
      renderer.setSize(1440, 1000);
    }
  }

  function throwDice() {
    initPhysics();
    initScene();
    render();
    diceMaking();
    finalScore = 0;
    if (diceArray) {
      diceArray.forEach((d, dIdx) => {
        d.body.velocity.setZero();
        d.body.angularVelocity.setZero();
        // 주사위 던지는 위치
        d.body.position.set(6, dIdx * 1.7, -10);
        d.mesh.position.copy(d.body.position);

        d.mesh.rotation.set(
          2 * Math.PI * Math.random(),
          0,
          2 * Math.PI * Math.random()
        );
        const force = 3 + 5 * Math.random();
        d.body.applyImpulse(
          new CANNON.Vec3(-force, force, 0),
          new CANNON.Vec3(0, 0, 0.2)
        );
        d.body.allowSleep = true;
      });
    }
    // onClose();
  }

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "25% ",
          left: "40%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <canvas ref={canvasRef} id="canvas"></canvas>
      </div>
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "43%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <h1 style={{ fontSize: "120px", color: "black" }}>{totalScore}</h1>
      </div>
      <img src={rollDice} alt="rollDice" onClick={throwDice} />
    </>
  );
};

const mapStateToProps = (state) => ({
  totalScore: state.totalScore.totalScore,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setTotalScore: (score: number) => dispatch(setTotalScore(score)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dice);
