import React from 'react';
import './App.css';
import Login from './Components/Login';
import Navbar from './Components/navbar';
import Signup from './Components/Signup';
import FetchData from './Components/FetchData';
import Hometest from "./Components/Hometest"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Home from './Components/home';

function App() {
  return (
    <div className="">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>    
      </div>
  );
}

export default App;
