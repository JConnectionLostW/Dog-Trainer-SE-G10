import React from 'react'
import LoginButton from './Login';
import LogoutButton from './Logout';
import Profile from './Profile';

const Account = () => {
  return (
    <div>
        <h1>Account</h1>
        <LoginButton/>
        <LogoutButton/>
        <Profile/>
    </div>
  )
}

export default Account;