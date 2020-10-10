import React, { useState, useEffect } from "react";
import "./MeditationForm.css";
import song from "../resources/beach.mp3";

const MeditationForm = ({ backgroundState, onChange }) => {
  const [time, setTime] = useState();
  const [timeState, setTimeState] = useState();
  const [displayTimer, setDisplayTimer] = useState();
  useEffect(() => {});

  const startMeditation = (event, time) => {
    event.preventDefault();
    setTimeState(true);
    setTime(time);
    const song = document.getElementsByClassName("song")[0];
    song.play();
  };
  return (
    <form className="MeditaionForm">
      <div>
        {/* <img
          src="https://media.giphy.com/media/xFmuT64Jto3mRO4w3G/giphy.gif"
          alt="hourglass"
          height="150" 
          width="200"
        /> */}
        <br></br>
        <br></br>
        <button
          className="two"
          data-time="120"
          onClick={(e)=>{startMeditation(e, 120)}}
        >
          2 mins
        </button>
        <br></br>
        <br></br>
        <button
          className="five"
          data-time="300"
          onClick={(e)=>{startMeditation(e, 300)}}
        >
          5 Mins
        </button>
        <br></br>
        <br></br>
        <button
          className="ten"
          data-time="600"
          onClick={(e)=>{startMeditation(e, 600)}}
        >10 Mins
        </button>
        <br></br>
        <br></br>
        {timeState && (
          <div className="Message">
            close your eyes and focus on your breath{" "}
          </div>
        )}
        {timeState && <div className="timeDisplay">{displayTimer}</div>}
        <audio className="song" src={song}></audio>
      </div>
    </form>
  );
};

export default MeditationForm;
