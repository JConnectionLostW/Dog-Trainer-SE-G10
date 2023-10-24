import React, { useState } from 'react';
import PropTypes from 'prop-types'; //allows use of setToken prop

//function that makes a post request to server

async function loginUser(credentials) {
  //connects to server to fetch
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

export default function Login({setToken}){
  // State to store user input
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

//create form submit handler to do logins
//then call it later with form onSubmit
  const handleLogin = async e => {
    e.preventDefault();
    // You would typically perform authentication here
    //console.log('Username:', username); old data
    //console.log('Password:', password); old data
      username,
      password
  });
  setToken(token);
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}
