import { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";

import './App.css';

function Home() {
  return <h1>Home</h1>
}
function Categories() {
  return <h1>Categories</h1>
}
function About() {
  return <h1>About</h1>
}

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/categories">Categories</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="categories" element={<Categories />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;