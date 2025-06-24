import React, { useState, useEffect } from "react";
import axios from "axios";
import { createRoot } from "react-dom/client";
// import axios from "axios"; // Maybe we'll need axios? 🤔
import "./style.css";
import SearchField from "./SearchField";
import GifCard from "./GifCard";

const GIPHY_API_KEY = `M5DpTGZFf9Mz3pKladW8ZWy50KnUi4d8`;

// const GIPHY_API_KEY = "YOUR_API_KEY";

const App = () => {
  const [gifs, setGifs] = useState([]);
  const [input, setInput] = useState("");

  //Tries to fetch the data
  //Copied the same function for fetchGifs and inserted the user 
  const fetchTrendingGifs = async () => {
  const url = `http://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_API_KEY}`;
  const response = await axios.get(url);
  const trendingGifs = response.data.data;
  setGifs(trendingGifs);
};

  const fetchGifs = async (searchTerm) => {
    if (!searchTerm) {
      console.log("No Search Term");
    }
    const url = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${GIPHY_API_KEY}`;
    const gifsResponse = await axios.get(url);
    const gifsData = gifsResponse.data;
    const giphyData = gifsData.data;
    setGifs(giphyData);
  };

  //useEffect to make sure that it does not go infinitley through that function
  useEffect(() => {
    fetchTrendingGifs(); // default search term when app loads
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with input:", input); //Tests to check if we were getting inputs
    fetchGifs(input);
  };

  return (
    <div className="app">
      <h1 className="title">Let's look for some Gifs!</h1>
      <SearchField
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
      />
      <button onClick={fetchTrendingGifs}>Trending GIFs</button>

      <div className="gif-grid">
        {gifs.map((gif) => (
          <GifCard key={gif.id} gif={gif} />
        ))}
      </div>
    </div>
  );
};

// The following lines initialize your React application and inject
// it into the index.html
const root = createRoot(document.getElementById("root"));
root.render(<App />);
