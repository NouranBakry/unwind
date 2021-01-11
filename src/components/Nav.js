import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import Logo from "../resources/unplug-logo.png";

const Nav = () => {
  // const getNewBackground = (event) => {
  //   event.preventDefault();
  //    onChange(!backgroundState.backgroundState);
  // }

  return (
    <div className="Nav">
      <ul className="ul">
        <li>
          <Link to="">
            <img src={Logo} alt="logo" width="20px" height="20px" />
            <button className="unwindUnplug">Unwind-Unplug</button>
          </Link>
        </li>
        <li>
          <Link to="/meditate">
            <button className="meditate">Meditate</button>
          </Link>
        </li>
        <li>
          <Link to="">
            <button className="contact">contact</button>
          </Link>
        </li>
        <li>
          <Link to="/home">
            <button className="fortuneCookie">Today's Fortune Cookie</button>
          </Link>
        </li>
        {/* <li className="git">
          <button
            className="gitButton"
            onClick={() =>
              window.open("https://www.github.com/NouranBakry/unwind", "_blank")
            }
          >
            Github
          </button>
        </li> */}
        {/* <li className="twitter">
          <button
            className="twitterButton"
            onClick={() =>
              window.open("http://www.twitter.com/nouranbakry_", "_blank")
            }
          >
            Twitter
          </button>
        </li> */}
        {/* <li className="linkedin">
          <button
            className="linkedinButton"
            onClick={() =>
              window.open("https://www.linkedin.com/in/nouran-bakry", "_blank")
            }
          >
            LinkedIn
          </button>
        </li> */}
        {/* <li className="email">
          <button
            className="emailButton"
            onClick={() =>
              window.open("mailto:nouranaymanbakry@gmail.com", "_blank")
            }
          >
            Email me
          </button>
        </li> */}
        {/* <li>
          <button className="backgroundButton" onClick={getNewBackground}>
          <span role="img" aria-label="camera">📷</span>
          See Today's Inspirational Photo</button>
        </li> */}
      </ul>
    </div>
  );
};

export default Nav;
