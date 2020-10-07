import React from "react";
import GetImageFromAPI from "../GetImageFromAPI";
import "./MeditationForm.css";

const MeditationForm = () => {
  return (
    <form className="MeditaionForm">
      <div
        className="container"
        style={GetImageFromAPI ? { background: GetImageFromAPI } : {}}
      >
        <h1 className="instruction">
          {" "}
          Pick a time{" "}
          <span role="img" aria-label="clock">
            ⏰
          </span>
        </h1>
        <button className="five" type="button">
          5 Mins
        </button>
        <br></br>
        <br></br>
        <button className="ten" type="button">
          10 Mins
        </button>
        <br></br>
        <br></br>
      </div>
    </form>
  );
};

export default MeditationForm;
