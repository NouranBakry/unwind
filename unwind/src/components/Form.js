import React from "react";
import "./Form.css";
import logo from "../resources/logo.png";

const Form = () => {
  return (
    <form className="Form">
      <header className="title"></header>
      <img src={logo}></img>
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
