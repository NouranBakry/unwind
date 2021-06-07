import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {

  return (
    <div className="Nav">
      <ul className="ul">
        <li>
          <Link to="">
            <button className="home">          Home</button>
          </Link>
        </li>
        <li>
          <Link to="/meditate">
            <button className="meditate">Meditate</button>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <button className="contact">Contact</button>
          </Link>
        </li>
        <li>
          <Link to="/quote">
            <button className="quotes">Today's Inspirational Quote</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
