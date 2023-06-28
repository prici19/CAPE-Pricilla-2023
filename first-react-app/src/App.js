import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './components/NavBar';
import "./App.css";

import Contact from "./Contact";
import Home from "./Home";
import About from "./About";

function App() {
  return (<BrowserRouter>
    <Navbar/> <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/About" element={<About/>} />
      <Route path="/Contact" element={<Contact/>} />
    </Routes>
    </BrowserRouter> 
    );
  }
export default App;