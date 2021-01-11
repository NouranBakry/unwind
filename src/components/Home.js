import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import img from "../resources/sonnie-hiles-rX8gBeg2WM0-unsplash 1.png";
import Nav from "./Nav.js";
import Footer from "./Footer.js";

const Home = () => {
  return (
    <div className="Home">
      <Nav></Nav>
      <div className="container">
        <div className="imgBlock">
          <img className="img" alt="yoga-lady" src={img}></img>
        </div>
        <div className="header">
          <div className="title">Unwind Unplug</div>
          <div className="description">live mindfully</div>
          <br></br>
          <Link to="meditate">
            <button className="meditate-Button">Start Meditating</button>
          </Link>
          <br></br>
          <br></br>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
