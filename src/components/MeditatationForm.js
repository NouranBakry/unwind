import React, { useState, useEffect } from "react";
import "./MeditationForm.css";

const MeditationForm = ({backgroundState, onChange}) => {
  const [time, setTime] = useState(0);
  const [timeState, setTimeState] = useState(false);
  useEffect(() => {
    return () => {
    }
  }, [time,timeState])

  function twoMinuteMeditation(event){
    event.preventDefault();
    onChange(!backgroundState.backgroundState);
    setTimeState(!timeState);
    setTime(120);
    const song = document.getElementsByClassName("song")[0];
    song.play();
    // const song = new Audio("./resources/beach.mp3");
    // song.play();
  }
  function fiveMinuteMeditation(event){
    event.preventDefault();
    onChange(!backgroundState.backgroundState);
    setTimeState(!timeState);
    setTime(300);
    const song = document.getElementsByClassName("song")[0];
    song.play();
  }
  function tenMinuteMeditation(event){
    event.preventDefault();
    onChange(!backgroundState.backgroundState);
    setTimeState(!timeState);
    setTime(600);
    const song = document.getElementsByClassName("song")[0];
    song.play();
  }
  return (
    <form className="MeditaionForm">
      <div>
        <h1 className="instruction">
          <span role="img" aria-label="clock">
            ⌛
          </span>
        </h1>
        <button className="two" data-time="120" onClick={twoMinuteMeditation}>
          2 mins
        </button>
        <br></br>
        <br></br>
        <button className="five" data-time="300" onClick={fiveMinuteMeditation}>
          5 Mins
        </button>
        <br></br>
        <br></br>
        <button className="ten" data-time="600" onClick={tenMinuteMeditation}>
          10 Mins
        </button>
        <br></br>
        <br></br>
        <h2 className="Message">{timeState && <a>Close your eyes and focus on your breath</a>}</h2>
        {timeState && <div className="timeDisplay">{time}</div>}
        <audio className="song">
          <source src="/resources/beach.mp3"></source>
        </audio>
      </div>
    </form>
  );
};

export default MeditationForm;
