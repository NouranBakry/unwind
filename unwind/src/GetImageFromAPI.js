import React, { useState, useEffect } from "react";

function GetImageFromAPI() {
  const [image, setImage] = useState("");

  useEffect(() => {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=GHf55fKLPuTo7wtX7IlkwO2MN62g0FsnPdzbrI2G"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.url);
        setImage(data);
      });
    return () => {};
  }, []);
  return <img className="image" alt={image.title} src={image.url} />;
}
export default GetImageFromAPI;
