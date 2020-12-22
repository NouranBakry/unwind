import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import img from "../resources/sonnie-hiles-rX8gBeg2WM0-unsplash 1.png";

const Home = () => {
  return (
    <div className="Home">
      <div className="header">
        {" "}
        <div className="title">Unwind and Unplug</div>
        <div className="description">
          live mindfully, meditate anytime anywhere
        </div>
      </div>
      <div className="buttons">
        <Link to="meditate">
          <button className="meditate-Button">Meditate</button>
        </Link>
        <button className="fortuneCookie-Button">Fortune Cookie</button>
        <button className="about-Button">About me</button>
      </div>
      <div className="imgBlock">
        {" "}
        <img className="img" alt="yoga-lady" src={img}></img>
      </div>
    </div>
  );
};

export default Home;
