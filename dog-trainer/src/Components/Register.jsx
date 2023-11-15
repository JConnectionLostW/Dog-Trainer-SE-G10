import React, { useState } from 'react';
import Axios from 'axios';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegistration =() => {
    //start of changes
    //check username and password for proper format
    // Validate username and password format
    const usernamePattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/; // Requires "@" in the username

    if (!usernamePattern.test(username)) {
      setError('Invalid username. Please enter a valid email address.');
      return;
    }

    // Validate other criteria for the password (if needed)
    const passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
    if (!passwordPattern.test(password)) {
      setError('Invalid password. It must contain at least 8 characters, including a number and a special character (!@#$%^&*).');
      return;
    }
    //end of changes
    // If validation passes, move to registration logic
    // ...

    Axios.post("http://localhost:8080/create", {
      username: username, 
      password: password
    }).then(()=>{console.log("success");
    // Clear any previous errors
    setError('');
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
