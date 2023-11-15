/*import React, { useState } from 'react';
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    // Basic validation
    if (!username || !password) {
      setError('Please enter both username and password.');
      return;
    }

//function that makes a post request to server

try {
  //connects to server to fetch
  const response = await fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password}),
  });
  
  if (response.ok) {
        // Authentication successful, handle the result (e.g., store token)
        const data = await response.json();
        console.log('Token:', data.token);
        setError('');
  } else {
        // Authentication failed, handle the error
        setError('Invalid username or password.');
  }
    } catch (error) {
      console.error('Login error:', error);
      setError('Error during login. Please try again later.');
    }
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

}*/
//Creates a button that redirects user to auth0 login signup page for our webpage
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated} = useAuth0();

  return ( 
    !isAuthenticated && (
    <button onClick={() => loginWithRedirect()}>
      Log In
    </button>
    )  
  )
}

export default LoginButton;

