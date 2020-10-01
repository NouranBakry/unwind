import React from "react";
import logo from "../resources/logo.png";

const MeditationForm = () => {
  return (
    <form className="MeditaionForm">
      <header className="title"></header>
      {/* <img src={logo} alt="chankra" className="logo" /> */}
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
