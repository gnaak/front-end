import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "../src/pages/Login/Login";
import Map from './pages/Map/Map'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/play" element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
