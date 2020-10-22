import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import img from "../resources/sonnie-hiles-rX8gBeg2WM0-unsplash 1.png";

const Home = () => {
  return (
    <div className="Home">
    <h1 className="Title">
      Unwind and Unplug 
    </h1>
      <br></br>
      <br></br>
      <h2 className="Description">live mindfully, meditate anytime anywhere</h2>
      <button className="Meditate-Button">Meditate</button>
      <button className="FortuneCookie-Button">Fortune Cookie</button>
      <button className="About-Button">About me</button>
      <img
        className="img"
        alt="yoga"
        src={img}
      ></img>
      <Link to="meditate">
        <button className="Start-Button">Start Meditating Now</button>
      </Link>
    </div>
  );
};

export default Home;
