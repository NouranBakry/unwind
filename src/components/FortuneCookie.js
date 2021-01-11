import React, { useState, useEffect } from "react";
import "./FortuneCookie.css";
// import { Link } from "react-router-dom";
import Nav from "./Nav";

const FortuneCookie = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [state, setState] = useState(false);
  useEffect(() => {
    fetch("https://quotes.rest/qod.json?category=inspire")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.contents.quotes[0].quote);
        setAuthor(data.contents.quotes[0].author);
      });
    return () => {};
  }, []);

  const handlequotesButton = (event) => {
    event.preventDefault();
    setState(!state);
  };

  return (
    <div className="homePage">
      <Nav></Nav>
      <div className="container">
        <div className="buttons-container">
          <button className="quoteButton" onClick={handlequotesButton}>
            Today's Fortune Cookie
            <span role="img" aria-label="cookie">
              🍪
            </span>
          </button>
        </div>
        <br></br>
        <div className="quote-container">
          {state && (
            <div className="quote">
              "{quote}" - {author}"
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FortuneCookie;
