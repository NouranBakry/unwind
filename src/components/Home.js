import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Nav from "./Nav.js";


const Home = () => {
  return (
    <div className="Home">
      <div className="container">
        <Nav></Nav>
        <div className="imgBlock">
        </div>
        <div className="header">
          <div className="title">take a deep breath</div>
          <br></br>
          <Link to="meditate">
            <button className="meditate-Button">Start</button>
          </Link>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default Home;
