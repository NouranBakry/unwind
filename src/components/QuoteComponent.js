import React, { useState, useEffect } from "react";
import "./QuoteComponent.css";
import Nav from "./Nav";

const QuoteComponent = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  useEffect(() => {
    fetch("https://quotes.rest/qod.json?category=inspire")
      .then((res) => res.json())
      .then((data) => {
        setQuote(data.contents.quotes[0].quote);
        setAuthor(data.contents.quotes[0].author);
      });
    return () => {};
  }, []);

  return (
    <div className="quote">
        <div className="quote-container">
            <Nav></Nav>
            <div className="quote-text">
              {quote} - {author}
            </div>
        </div>
    </div>
  );
};

export default QuoteComponent;
