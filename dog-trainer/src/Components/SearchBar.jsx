import React, { useState, useEffect } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) => response.json()).then((json) => {
      const results = json.filter((user) => {
        return (
          value && user && user.name && user.name.toLowerCase().includes(value)
        );
      });
      console.log(results);
    });
  };

  const handleChange = (value) => {
    setInput(value)
    fetchData(value)
  }

  return (
    <div className='input-wrapper'>
      <input
      placeholder='Search for a dog breed...'
      value={input}
      onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  )
}


export default SearchBar;