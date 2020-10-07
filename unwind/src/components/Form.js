import React, { useState, useEffect } from "react";
import "./Form.css";
import { Link } from "react-router-dom";

const Form = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [state, setState] = useState(false);
  useEffect(() => {
    fetch("http://quotes.rest/qod.json?category=inspire")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.contents.quotes[0].quote);
        setAuthor(data.contents.quotes[0].author);
      });
    return () => {};
  }, []);
  const handlequotesButton = (event) => {
    event.preventDefault();
    console.log(event);
    setState(true);
  };
  return (
    <form className="Form">
      <div>
        <header className="title"></header>
        <header className="title">
          Unwind
          <span role="img" aria-label="lotus">
            🧘‍♀️
          </span>
        </header>
        <br></br>
        <button className="quoteButton" onClick={handlequotesButton}>
          Today's Fortune Cookie
          <span role="img" aria-label="cookie">
            🍪
          </span>
        </button>
        <br></br>
        <br></br>
        <Link to="meditate">
          <button className="meditationButton">
            Start Meditating<span role="img" aria-label="meditate">🧘‍♀️</span>
          </button>{" "}
        </Link>
        <br></br>
        <br></br>
        {state && (
          <div className="quote">
            "{quote}" - {author}
          </div>
        )}
      </div>
    </form>
  );
};

export default Form;
