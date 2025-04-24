import React, { useState } from "react";
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import PageSigin from "./pages/sigin";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<>Home</>} />
        <Route path="login" element={<PageSigin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;