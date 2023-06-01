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
import Footer from './Components/Footer';
import About from './Components/about';
import Quiz from './Components/Quiz';
import Characters from './Components/Characters';
function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path="/quiz" element={<Quiz/>}/>
          <Route path="/characters" element={<Characters/>}/>
        </Routes>
      </Router> 
      <Footer />   
    </div>
  );
}

export default App;
