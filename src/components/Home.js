import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import img from "../resources/sonnie-hiles-rX8gBeg2WM0-unsplash 1.png";
import Nav from "./Nav";

const Home = () => {
  return (
    <div className="Home">
      <Nav></Nav>
      <div className="header">
        {" "}
        <div className="title">Unwind, Unplug</div>
        <div className="description">
          live mindfully, meditate anytime anywhere
        </div>
      </div>
      <div className="buttons">
        <Link to="meditate">
          <button className="meditate-Button">Meditate</button>
        </Link>
      </div>
      <div className="imgBlock">
        {" "}
        <img className="img" alt="yoga-lady" src={img}></img>
      </div>
    </div>
  );
};

export default Home;
