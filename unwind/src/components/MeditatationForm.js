import React from "react";
import "./MeditationForm.css";

const MeditationForm = (props) => {
  function startMeditation(event) {
    event.preventDefault();
    props.onChange(true);
  }
  return (
    <form className="MeditaionForm">
      <div>
        <h1 className="instruction">
          <span role="img" aria-label="clock">
            ⌛
          </span>
        </h1>
        <button className="two" data-time="120" onClick={startMeditation}>
          2 mins
        </button>
        <br></br>
        <br></br>
        <button className="five" data-time="300">
          5 Mins
        </button>
        <br></br>
        <br></br>
        <button className="ten" data-time="600">
          10 Mins
        </button>
        <br></br>
        <br></br>
        <h2 className="timeDisplay">0:00</h2>
        <div className="player-container">
          <audio className="song" src="./resources/beach.mp3"></audio>
        </div>
      </div>
    </form>
  );
};

export default MeditationForm;
