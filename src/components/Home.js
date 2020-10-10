import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <img
        src="https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif"
        alt="welcome cat"
      />
      <br></br>
      hellloo hooman{" "}
      <span role="img" aria-label="hello">
        👋
      </span>
      <br></br>
      look at me, focus, appreciate everything about your present moment
      <br></br>
      <br></br>
      <Link to="home">
            <button className="homeButton">
        Get Started
        <span role="img" aria-label="yay">
          🙌
        </span>
      </button>
      </Link>
    </div>
  );
};

export default Home;
