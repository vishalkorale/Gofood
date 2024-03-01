// import logo from "./logo.svg";
import "./App.css";
import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';s
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./screens/Home";
import Login from "./components/Login";


function App() {
  return (
    <Router>
    
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/login" element={<Login/>}/>
        
      </Routes>
    </div>
    </Router>
  )
}

export default App

