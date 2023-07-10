import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './components/NavBar';
import "./App.css";

import Blog from "./Blog";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (<BrowserRouter>
    <Navbar/> <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>} />
      <Route path="/Blog" element={<Blog/>} />
      <Route path="/Contact" element= {<Contact/>}/>
    </Routes>
    </BrowserRouter> 

    );
  }
export default App;