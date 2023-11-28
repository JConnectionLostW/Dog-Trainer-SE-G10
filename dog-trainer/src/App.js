import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './Components/Navbar.css';
import HomePage from './Components/HomePage';
import NavBar from './Components/Navbar';
import Account from './Components/Account';
import Chat from './Components/Chat';

function App() {
  //This section is still in progress
  // this sets a token for the login page using useToken
  // token and setToken

  //set token by getting it from function  
  //const { token, setToken } = useToken();

  //displays Login if token is false
  //if(!token) {
  //  return <Register setToken={setToken} /> //plan to adjust
  //}
//end of wip
  
  return (
    <div className='App'>
      
        <NavBar/>
      <div>
        <Router>
            <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path='/Chat' element= {<Chat />}/>
              <Route path='/Account' element={<Account />} />
            </Routes>
        </Router>
      </div>
    
    </div>
  );
}

export default App;
