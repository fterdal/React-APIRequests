import React, { useEffect, useState } from "react";

const SearchField = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [apiGif, setApiGif] = useState([]);
  const url = `https://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=XFrizQa5xUa0QyIdpW7DVlGPZTC2p9m3`;;



  const dataFiltered = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setApiGif(data.data);
      setFilteredData(data.data);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    dataFiltered();
  }, [searchQuery])



  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  }



  return <div>
    <input type="text"
      placeholder="Search..."
      value={searchQuery}
      onChange={handleInputChange}
      className="search-input"
    />
    <div className="gif-grid">
      {filteredData.map((item) => (
        <div className="gif-card" key={item.id}>
          <img className="gif-img" src={item.images.fixed_height.url} alt={item.title} />
        </div>
      ))}
    </div>



  </div>;
};

export default SearchField;
