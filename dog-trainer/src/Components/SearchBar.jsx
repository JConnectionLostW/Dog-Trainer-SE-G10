import React, { useState, useEffect } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/create');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json();
      setData(data);
      setIsDataFetched(true);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    // Filter data based on the search term
    const filteredResults = data.filter((dog) =>
      dog.breed_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredData(filteredResults);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className='input-wrapper'>
        <input type='text' placeholder='Find a Dog...' value={searchTerm} onChange={handleSearchChange} />
        <div>
          <button onClick={fetchData}>Search</button>
        </div>
      </div>
      
      {isDataFetched && (
        <div>
          <h2>Search Results:</h2>
          <ul className='resultList'>
            {filteredData.map((dog) => (
              <li key={dog.breed_id}>
                <strong>{dog.breed_name}</strong>: {dog.country_of_origin} , {dog.size} , {dog.temperament} , {dog.lifespan} , {dog.common_colors}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;


/*const SearchBar = () => {
  const [input, setInput] = useState("");
  const fetchData = (value) => {
    fetch("http://localhost:8080/api/create").then((response) => response.json()).then((json) => {
      const results = json.filter((user) => {
        return (
          value && user && user.name && user.name.includes(value)
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