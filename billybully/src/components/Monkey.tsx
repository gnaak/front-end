import React, { useEffect, useRef, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { connect } from "react-redux";
import { setCurrentLocation } from "../store/reducer";
import { Dispatch } from "@reduxjs/toolkit";
import MonekProps from "../types/MonkeyProps";

const Monkey: React.FC<MonekProps> = ({ totalScore, setCurrentLocation }) => {
  const monkeyPath = "/public/monkey.gltf";
  const monkey = useLoader(GLTFLoader, monkeyPath);
  const currentPositionRef = useRef<number>(0);
  const [rotation, setRotation] = useState([0, (Math.PI / 4), 0]);
  //원숭이 이동
  const [position, setPosition] = useState([-3, -11, -3]);
  // const [position, setPosition] = useState([-17, -8,-1]);
  useEffect(() => {
    console.log("totalScore:", totalScore);
    if (totalScore !== 0) {
      let currentScore = 1;
      const intervalId = setInterval(() => {
        currentScore++;
        currentPositionRef.current++;
        if (currentPositionRef.current <= 6) {
          setPosition((prevPosition) => [
            prevPosition[0] - 3.2,
            prevPosition[1],
            prevPosition[2],
          ]);
          setRotation([0, 3 * (Math.PI / 2), 0]);
        }
        if (
          currentPositionRef.current > 6 &&
          currentPositionRef.current <= 12
        ) {
          setPosition((prevPosition) => [
            prevPosition[0],
            prevPosition[1],
            prevPosition[2] - 3.2,
          ]);
          setRotation([0, Math.PI, 0]);
        }
        if (
          currentPositionRef.current > 12 &&
          currentPositionRef.current <= 18
        ) {
          setPosition((prevPosition) => [
            prevPosition[0] + 3.2,
            prevPosition[1],
            prevPosition[2],
          ]);
          setRotation([0, Math.PI / 2, 0]);
        }
        if (
          currentPositionRef.current > 18 &&
          currentPositionRef.current <= 24
        ) {
          setPosition((prevPosition) => [
            prevPosition[0],
            prevPosition[1],
            prevPosition[2] + 3.2,
          ]);
          setRotation([0, -Math.PI / 4, 0]);
        }
        if (currentPositionRef.current == 24) {
          currentPositionRef.current = 0;
          setCurrentLocation(currentPositionRef.current);
        }
        setCurrentLocation(currentPositionRef.current);
        if (currentScore > totalScore) {
          clearInterval(intervalId);
          setRotation([0, Math.PI / 4, 0]);
        }
      }, 300);
      return () => {
        clearInterval(intervalId);
      };
    }
  }, [totalScore]);

  return (
    <primitive
      object={monkey.scene}
      position={position}
      rotation={rotation}
    ></primitive>
  );
};

const mapStateToProps = (state) => ({
  totalScore: state.totalScore.totalScore,
  currentLocation: state.currentLocation.currentLocation,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCurrentLocation: (score: number) => dispatch(setCurrentLocation(score)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Monkey);
