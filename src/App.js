// src/App.js
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from './HomeScreen';
import PlanetOne from './PlanetOne';
import PlanetTwo from './PlanetTwo';
import TeachersArea from './TeachersArea';
import ParentsArea from './ParentsArea';
//import PlanetOne from ","
export default function App() {
  // Render the App component, including the HomeScreen
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/planetone" element={<PlanetOne />}></Route>
        <Route path="/teachersarea" element={<TeachersArea />}></Route>
        <Route path="/parentsarea" element={<ParentsArea />}></Route>
        <Route path="/planettwo" element={<PlanetTwo />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}