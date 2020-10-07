import React from "react";
import "./Nav.css";
const Nav = () => {
  return (
    <div className="Nav">
      <ul className="ul">
        <li className="git">
          <a href="www.github.com/NouranBakry/unwind">github</a>
        </li>
        <li className="twitter">
          <a href="www.twitter.com/nouranbakry_">Follow Me on Twitter</a>
        </li>
        <li className="email">
          <a href="emailto:nouranaymanbakry@gmail.com">Email me</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
