import React, { useState } from 'react';
import Axios from 'axios';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleRegistration =() => {
    Axios.post("http://localhost:8080/create", {
      username: username, 
      password: password
    }).then(()=>{console.log("success");
  });
  };
 /* const handleRegistration = async () => {
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Registration was successful
        console.log('Registration successful');
      } else {
        // Handle registration errors
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
*/
  return (
    <div>
      <h1>Registration Page</h1>
      <form>
        <div>
          <label>Username:</label>
          <input
            type="username"
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
          <button type="button" onClick={handleRegistration}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
