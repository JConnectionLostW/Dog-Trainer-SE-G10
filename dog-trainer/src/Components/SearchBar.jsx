import React, { useState, useEffect } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);

  //searchbar does connect to db but its still running into "key" issues
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/create?search=${searchTerm}');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
      
    }
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  }

  return (
    <div>
      <input type='text' placeholder='Find a Dog...' value={searchTerm} onChange={handleSearchChange} />
      <button onClick={fetchData}>Search</button>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            <strong>{item.name}</strong>: {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
}


export default SearchBar;
/*const SearchBar = () => {
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
export default SearchBar;*/