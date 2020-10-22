import React, { useState, useEffect } from "react";
import "./MeditationForm.css";
import song from "../resources/beach.mp3";
import { Link } from "react-router-dom";


const MeditationForm = () => {
  const [state, setState] = useState(false);
  const [currentTime, setCurrentTime] = useState();
  const [displayTime, setDisplayTime] = useState();

  useEffect(() => {
    let seconds = currentTime % 60;
    seconds = seconds === 0 ? "00" : seconds;
    seconds = seconds !== "00" && seconds < 10 ? `0${seconds}` : seconds;
    let displayTime = `${Math.floor(currentTime / 60)}:${seconds}`;
    setDisplayTime(displayTime);
    setCurrentTime(currentTime - 1);
    if (currentTime === 0) {
      setState(false);
    }
    return () => {};
  }, [currentTime]);
  const startMeditation = (event, time) => {
    event.preventDefault();
    const song = document.getElementsByClassName("song")[0];
    setState(!state);
    setCurrentTime(time);
    song.play();
  };

  return (
    <form className="MeditaionForm">
          <h1 className ="Title">Get Ready to start your Meditation session</h1>
          <p className ="Message">
            Take a Deep Breath Breath in through your nose and out through your
            mouth Imagine yourself lying on warm sunny beach watching the waves
            and the birds flying Remember everything you are grateful for at
            this very present moment Listen to the sounds surrounding you Focus
            on your breath When you can feel the air and sun on your skin slowly
            start to close your eyes and focus on the sound of the beach
          </p>
        <button
          className="two"
          data-time="120"
          onClick={(e) => {
            startMeditation(e, 120);
          }}
        >
          2 mins
        </button>
        <button
          className="five"
          data-time="300"
          onClick={(e) => {
            startMeditation(e, 300);
          }}
        >
          5 Mins
        </button>
        <button
          className="ten"
          data-time="600"
          onClick={(e) => {
            startMeditation(e, 600);
          }}
        >
          10 Mins
        </button>
        <button className="playButton"><div className="polygon"></div></button>
        <button className="Background-Button">Get Today’s Background</button>
        <Link to="home">
        <button className="home">Home</button>  
        </Link>
        {state && <div className="timeDisplay">{displayTime}</div>}
        <audio className="song" src={song}></audio>
    </form>
  );
};

export default MeditationForm;
