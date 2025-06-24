import React from "react";
import './GifCard.css'

const GifCard = ({data}) => {
  console.log("this is data-->", data[0]?.title)
  return (
    <div className="gif-card-container">
      <div className="cards">{}</div>
      <div className="cards">ghdgh</div>
      <div className="cards">dfghdh</div>
      <div className="cards">dfghd</div>
      <div className="cards"></div>
      <div className="cards"></div>
      <div className="cards"></div>
      <div className="cards"></div>
      <div className="cards"></div>
      <div className="cards">hdgh</div>
      <div className="cards"></div>
      <div className="cards"></div>

    </div>
  )
};

export default GifCard;
