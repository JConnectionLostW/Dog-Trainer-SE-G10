import React from 'react'
import SearchBar from './SearchBar'

const HomePage = () => {
  return (
    <div>
      <h1>Welcome To Your Pawsonal Trainer</h1>
      <p>Find information regarding various dog breeds. Information will be in regard to their training and care.</p>
      <div className='search-bar-container'></div>
      <SearchBar />

    </div>
  )
}

export default HomePage