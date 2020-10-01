import React, { useState } from "react";

function GetImageFromAPI() {
  const [image, setImage] = useState("");
  useEffect(() => {
    fetch(
      "https://api.https://api.nasa.gov/planetary/earth/imagery?lon=-95.33&lat=29.78&date=2018-01-01&dim=0.15&api_key=w0GN7gm0HfJn0OI596Ltgl6GfItyumOGUPGPzHdn.gov/planetary/earth/imagery"
    ).then((res) => {
      setImage(res.body);
    });
    return () => {};
  }, [input]);
}
export default GetImageFromAPI;
