import React, { useState } from 'react';

function SearchBar(props) {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    console.log(query);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.onSearch(query);
  };

  return (
    <form onSubmit={handleFormSubmit} className='search-container'>
      <input
        type="search"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange}
        className='bar'
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;