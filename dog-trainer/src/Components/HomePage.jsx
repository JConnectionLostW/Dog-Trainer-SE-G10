import React, { useState } from 'react'
import SearchBar from './SearchBar'
import './HomePage.css'

const HomePage = () => {
  return (
    <div className='content-box'>
      <h1>Welcome To Your Pawsonal Trainer</h1>
      <p>Find information regarding various dog breeds. Information will be in regard to their training and care.</p>
      <SearchBar/>
    </div>
  )
}

export default HomePage