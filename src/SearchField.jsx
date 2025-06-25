import React from "react";
import { useState } from "react";
const SearchField = ({ onSearch }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchInput);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search a gif"
          value={searchInput}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default SearchField;
