import React, { useState } from "react";
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
  BrowserRouter,
  useParams,
  useNavigate,
  useLocation
} from "react-router-dom";

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search])
}

function Home() {
  return <h1>Home</h1>
}

function Categories() {
  return (
    <>
      <h1>Categories</h1>
      <table>
        <thead>
          <th>Id</th>
          <th>Categories</th>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td><Link to="/categories/12">Seminar</Link></td>
          </tr>
        </tbody>
      </table>
    </>

  )
}
function CategoryDetails() {
  let { id } = useParams();

  console.log('params: ' + { id });
  return <h1>Categories: {id}</h1>
}

function Music() {
  let location = useLocation();
}
function About() {
  return <h1>About</h1>
}



function Login() {
  const navigate = useNavigate();
  return (
    <>
      <h1>Login</h1>
      <button onClick={() => navigate('/')}>Submit</button>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/music"></Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Home />} />
        <Route path="categories" element={<Login />} />
        <Route path="categories/:id" element={<CategoryDetails />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;