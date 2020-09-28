import React from "react";
import "./Form.css";
import logo from "../resources/logo.png";

const Form = () => {
  return (
    <form className="Form">
<<<<<<< HEAD
      <header className="title"></header>
      <img src={logo}></img>
      <button className="five" type="button">
        5 Mins
      </button>
      <button className="ten" type="button">
        10 Mins
      </button>
=======
      <img src={logo} alt="chankra" className="logo" />
      <header className="title">Unwind</header>
      <button className="five">5 Mins</button>
      <button className="ten">10 Mins</button>
>>>>>>> 2f250a11e177bbf9e008256f323e5d3c8c590d3e
    </form>
  );
};

export default Form;
