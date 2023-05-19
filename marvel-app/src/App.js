import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './Components/Login';
import Navbar from './Components/navbar';
import Signup from './Components/Signup';
import Home from './Components/home';
import About from './Components/about';


function App() {
  return (
    <div>
    
    <BrowserRouter>
    <Navbar/>
    
    <Routes>
      <Route index element={<Home/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='login' element= {<Login/>}></Route>
      <Route path='signup' element={<Signup/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
