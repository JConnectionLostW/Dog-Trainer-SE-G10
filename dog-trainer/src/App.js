import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './Components/Navbar.css';
import Login from './Components/Login';
import Register from './Components/Register';
import HomePage from './Components/HomePage';
import NavBar from './Components/Navbar';
import Account from './Components/Account';



function App() {
  //This section is still in progress
  // this sets a token for the login page using useToken
  // token and setToken

  //set token by getting it from function  
  const { token, setToken } = useToken();

  //displays Login if token is false
  if(!token) {
    return <Register setToken={setToken} /> //plan to adjust later in future
  }
//end of wip
  
  return (
    <div className='App'>
        <NavBar/>
      <div>
        <Router>
            <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path ="/Register" element={<Register />} />
              <Route path="/Login" element={<Login />} />
              <Route path='/Account' element={<Account />} />
            </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
