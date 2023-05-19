import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './Components/Login';
import Navbar from './Components/navbar';
import Signup from './Components/Signup';
import FetchData from './Components/FetchData';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="">
     <Signup/>
     <FetchData/>
    </div>
  );
}

export default App;
