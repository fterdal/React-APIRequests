import React, { useEffect, useState } from 'react';

const GetGif = async () => {
  const GIFAPIKEY = "https://api.giphy.com/v1/gifs/random?api_key=3Xt6KP7aUbnzyRIIlngcOzpV95VCfD0L&tag=&rating=g";

  try {
    const response = await fetch(GIFAPIKEY);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const json = await response.json();
  } catch (error) {
    console.error(error.message);
    return "we dont know yet"
  }

  function useEffect() =>
  {
    fetch(GIFAPIKEY)
  }
};

const GifCard = () =>
  {
    
  };

export default GifCard;
