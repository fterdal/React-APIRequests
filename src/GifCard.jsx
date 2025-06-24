import React from "react";

const GifCard = (props) => {
  const gif = props.gif;

  const cardStyle = {
    width: "200px",
    borderRadius: "8px",
    display: "inline-block",
    margin: "8px", 
  };

  return (
    <div className="gif-card">
      <img
        src={gif.images.fixed_height.url}
        style={cardStyle}
      />
    </div>
  );
};

export default GifCard;
