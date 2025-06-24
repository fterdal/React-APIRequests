import React from "react";

const GifCard = ({src }) => {
  return(
 
    <div className = "gif-card">

<img src= {src}
  className="gif-img"
/>
    <p>title</p>

  </div>

    

 );
};


export default GifCard;
