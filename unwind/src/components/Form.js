import React from "react";
import "./Form.css";
import logo from "../resources/logo.png";

const Form = () => {
  return (
    <form className="Form">
      <img src={logo} className="logo" />
      <header className="title">{/* <h1>Unwind</h1> */}</header>
      <button className="five" type="button">
        5 Mins
      </button>
      <button className="ten" type="button">
        10 Mins
      </button>
    </form>
  );
};

export default Form;
