import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";

// import axios from "axios"; // Maybe we'll need axios? 🤔
import "./style.css";
import "./GifCard";
import GifCard from "./GifCard";
import SearchField from "./SearchField";
// import GifCard from "./GifCard";

const GIPHY_API_KEY = "aAXJQI3cUJuaNhecvZC8rsL6p5jy1uPd";

const App = () => {
  const url = `https://api.giphy.com/v1/gifs/trending?api_key=${GIPHY_API_KEY}`;
  const [gifs, setGifs] = useState([]);
  const fetchGifData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log("data: ", data.data);
      setGifs(data.data);
    } catch (error) {
      console.error("There was an error");
    }
  };
  useEffect(() => {
    fetchGifData();
  }, []);

  const Search = (desiredSearch) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${desiredSearch}&api_key=${GIPHY_API_KEY}`;
  };
  return (
    <div className="app">
      <h1 className="title">Let's Make Some API Requests!</h1>

      <SearchField />
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
