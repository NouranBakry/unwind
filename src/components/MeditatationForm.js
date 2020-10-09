import React, { useState, useEffect } from "react";
import "./MeditationForm.css";
import song from "../resources/beach.mp3";

const MeditationForm = ({ backgroundState, onChange }) => {
  const [time, setTime] = useState();
  const [timeState, setTimeState] = useState(false);
  const [displayTimer, setDisplayTimer] = useState();
  useEffect(() => {
    setDisplayTimer(calculateTime());

  }, []);
  function calculateTime(){
    if(time > 0){
      let seconds = time % 60;
      seconds = seconds === 0 ? "00" : seconds;
      seconds = seconds !== "00" && seconds < 10 ? `0${seconds}` : seconds;
      let displayTime = `${Math.floor(time / 60)}:${seconds}`;
      setDisplayTimer(displayTime);
      console.log(displayTimer);
      setTime(previousTime => previousTime-1);
      console.log(time);
    }  
    if (time === 0) {
       setTimeState(false);
        setTime(0);
    }
  }
  function twoMinuteMeditation(event) {
    event.preventDefault();
    onChange(!backgroundState.backgroundState);
    setTimeState(true);
    setTime(120);
    const song = document.getElementsByClassName("song")[0];
    song.play();
  }

  function fiveMinuteMeditation(event) {
    event.preventDefault();
    onChange(!backgroundState.backgroundState);
    setTimeState(true);
    setTime(300);
    const song = document.getElementsByClassName("song")[0];
    song.play();
  }

  function tenMinuteMeditation(event) {
    event.preventDefault();
    onChange(!backgroundState.backgroundState);
    setTimeState(true);
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
        <h2 className="Message">
          {timeState && <a>Close your eyes and focus on your breath </a>}
        </h2>
        <h3 className="timer">
          {timeState && <a className="timeDisplay">{displayTimer}</a>}
        </h3>
        <audio className="song" src={song} control></audio>
      </div>
    </form>
  );
};

export default MeditationForm;
