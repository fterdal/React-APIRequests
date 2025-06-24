import React from "react";

const SearchField = ({ query, setQuery, onSearch }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search GIFs"
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default SearchField;
