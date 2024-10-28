import React from 'react';
import './Homecss.css';

const SearchComponent = () => {
  return (
    <div className="background-container">
      <div className="overlay">
        <h1 className="title-text">Find Your Next Adventure</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search destinations, flights, hotels..."
            className="search-input"
          />
          <button className="search-button">Search</button>
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;