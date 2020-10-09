import React from "react";
import "./Nav.css";
const Nav = () => {
  return (
    <div className="Nav">
      <ul className="ul">
        <li className="git">
          <a href="#https://www.github.com/NouranBakry/unwind">Github</a>
        </li>
        <li className="twitter">
          <a href="#http://www.twitter.com/nouranbakry_">
            Follow me on Twitter
          </a>
        </li>
        <li className="email">
          <a href="#mailto:nouranaymanbakry@gmail.com">Email me</a>
        </li>
        {/* <li className="resume">
          <a href="">Hire Me</a> 
        </li> */}
      </ul>
    </div>
  );
};

export default Nav;
