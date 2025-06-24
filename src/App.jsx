import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios"; // Maybe we'll need axios? 🤔
import "./style.css";
import GifCard from "./GifCard";
import SearchField from "./SearchField";
const GIPHY_API_KEY = "acI4uhyGsewykSVBBLzhlbu35ITdN8W3";
const trendingUrl = "http://api.giphy.com/v1/gifs/trending?api_key=acI4uhyGsewykSVBBLzhlbu35ITdN8W3";
const App = () => {
  const [gifs, setGifs] = useState([]);
    const fetchGifs = async () => {
      try{

        const gifResponse = await axios.get(trendingUrl);
        const trendingData = gifResponse.data;
        setGifs(trendingData.data);
      }
      catch(err) {
        console.error(err);
      }
  };
  useEffect(() => {
    fetchGifs();
  }, []);
console.log(gifs);

  return (
    <div className="app">
      <h1 className="title">Let's Make Some API Requests!</h1>
      <SearchField/>
       {gifs.map((gif) => (
        <GifCard key={gif.id} src={gif.images.fixed_height.url}  />
      ))}

       
        

     

    </div>
  );
};


// The following lines initialize your React application and inject
// it into the index.html
const root = createRoot(document.getElementById("root"));
root.render(<App />);


