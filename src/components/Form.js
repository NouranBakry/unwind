import React, { useState, useEffect } from "react";
import "./Form.css";
import { Link } from "react-router-dom";

const Form = () => {
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
      <div>
        <div className="title"></div>
        <div className='buttons-container'>
                  <button className="quoteButton" onClick={handlequotesButton}>
          Today's Fortune Cookie
          <span role="img" aria-label="cookie">
            🍪
          </span>
        </button>
        <Link to="meditate">
          <button className="meditationButton">
            Start Meditating
            <span role="img" aria-label="meditate">
              🧘‍♀️
            </span>
          </button>{" "}
        </Link>
        </div>
        {state && (
          <div className="quote">
            "{quote}" - {author}"
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
