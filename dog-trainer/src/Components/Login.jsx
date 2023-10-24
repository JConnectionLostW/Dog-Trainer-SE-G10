import React, { useState } from 'react';

function Login(){
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = (e) => {
    e.preventDefault();

    console.log('Username:', username);
    console.log('Password:', password);
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

export default Login;
