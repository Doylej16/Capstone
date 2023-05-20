import React from 'react';
import './App.css';
import Login from './Components/Login';
import Navbar from './Components/navbar';
import Signup from './Components/Signup';
import FetchData from './Components/FetchData';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hometest from "./Components/Hometest"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<FetchData/>}/>
        </Routes>
      </Router>    
      </div>
  );
}

export default App;
