import React from "react";
import "./Form.css";
import logo from "../resources/logo.png";
import QuotesAPI from "../GetQuoteFromAPI";

const Form = () => {
  return (
    <form className="Form">
      <header className="title"></header>
      {/* <img src={logo} alt="chankra" className="logo" /> */}
      <header className="title">Unwind</header>
      <button>Today's Fortune Cookie 🍪</button>
      <h2>Quote of the day</h2> <QuotesAPI />{" "}
    </form>
  );
};

export default Form;
