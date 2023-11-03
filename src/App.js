import React from 'react';
import './index.css';
import Home from './Routes/Home';
import Project from './Routes/Project';
import Experience from './Routes/Experience';
import {Route, Routes} from "react-router-dom";
import Hero from './Components/Hero';
import Blog from './Routes/Blog';
import Skills from './Routes/Skills';


function App() {
  return (
    <>
    <Routes>
      <Route  path="/" element={<Home/>}/>
      <Route  path="/project" element={<Project />}/>
      <Route  path="/experience" element={<Experience />}/>
      <Route  path="/skills" element={<Skills />}/>
      <Route  path="/blog" element={<Blog />}/>
    </Routes>
    
    </>
  );
}

export default App;
