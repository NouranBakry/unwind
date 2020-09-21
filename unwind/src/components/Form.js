import React from "react";
import "./Form.css";
import logo from "../resources/logo.png";

const Form = () => {
  return (
    <form className="Form">
      <img src={logo} alt="chankra" className="logo" />
      <header className="title">Unwind</header>
      <button className="five">5 Mins</button>
      <button className="ten">10 Mins</button>
    </form>
  );
};

export default Form;
