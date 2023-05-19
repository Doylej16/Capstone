import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
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
          <Route path="/Hometest" element={<Hometest/>}/>
        </Routes>
      </Router>    
      </div>
  );
}

export default App;
