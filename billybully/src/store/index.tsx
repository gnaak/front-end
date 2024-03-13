// import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

const store = configureStore({reducer:{
  totalScore: reducer,
  currentLocation: reducer
}}
  );

export default store;