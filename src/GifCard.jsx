import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import "./style.css";

const GifCard = ({ gif }) => {
  return (
    <div className="gif-card">
      <img src={gif.images.fixed_height.url} alt={gif.title} />
    </div>
  );
};

export default GifCard;
