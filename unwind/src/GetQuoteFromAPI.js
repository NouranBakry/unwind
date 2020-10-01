import React from "react";
import { useState, useEffect } from "react";

function QuotesAPI() {
  const [quote, setQuote] = useState("");
  // const [loading, setLoading] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    fetch("http://quotes.rest/qod.json?category=inspire")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQuote(data.contents.quotes[0].quote);
        setAuthor(data.contents.quotes[0].author);
      });
    return () => {};
  }, []);
  return (
    <div>
      <h1>{quote}</h1>
      <p>- {author}</p>
    </div>
  );
}

export default QuotesAPI;
