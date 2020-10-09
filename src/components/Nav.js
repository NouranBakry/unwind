import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="Nav">
      <ul className="ul">
        <li className="git">
          <button
            className="gitButton"
            onClick={()=> window.open("https://www.github.com/NouranBakry/unwind", "_blank")}
          >Github
          </button>
        </li>
        <li className="twitter">
          <button className= "twitterButton" onClick={()=>window.open("http://www.twitter.com/nouranbakry_", "_blank")}>
            Follow me on Twitter
          </button>
        </li>
        <li className="email">
          <button className="emailButton" onClick={()=> window.open("mailto:nouranaymanbakry@gmail.com","_blank")}>Email me</button>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
