import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './Components/Navbar.css';
import Login from './Components/Login';
import Register from './Components/Register';
import HomePage from './Components/HomePage';
import NavBar from './Components/Navbar';

function App() {
  return (
    <div className='App'>
        <NavBar/>
      <div>
        <Router>
            <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path ="/Register" element={<Register />} />
              <Route path="/Login" element={<Login />} />
            </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
