import React from "react";

const GifCard = ({ src }) => {
  return <div className="gif-card">
    <img src={src} alt="gif img" className="gif-img" />
  </div>;
};

export default GifCard;
