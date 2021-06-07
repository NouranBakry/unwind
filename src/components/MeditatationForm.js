import React, { useEffect, useState } from "react";
import "./MeditationForm.css";
// import song from "../resources/beach.mp3";
import Nav from "./Nav";

const MeditationForm = () => {
  const [state, setState] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [displayTime, setDisplayTime] = useState(`00:00`);

  useEffect(() => {
    let intervalId;
    if (state) {
      intervalId = setInterval(() => {
        let seconds = currentTime % 60;
        seconds = seconds === 0 ? "00" : seconds;
        seconds = seconds !== "00" && seconds < 10 ? `0${seconds}` : seconds;
        let displayTime = `${Math.floor(currentTime / 60)}:${seconds}`;
        setDisplayTime(displayTime);
        setCurrentTime(currentTime - 1);
        if (currentTime === 0) {
          setState(false);
        }
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [currentTime, state]);

  // const startMeditation = (event, time) => {
  //   event.preventDefault();
  //   setState(!state);
  //   setCurrentTime(time);
  // };

  return (
    <div className="meditationForm">
      <div className="meditation-container">
              <Nav></Nav>
        <div className="header-container">
          <div className="Title">Get Ready to start meditating</div>
          <div>
            {" "}
            <br></br>
            {/* <div className="Message">
              Take a Deep Breath slowly.. Breath in through your nose and slowly breath out through
              your mouth. We will have a simple visualisation exercise. Close your eyes and imagine yourself lying on warm sunny beach watching the
              waves and the birds flying Remember everything you are grateful
              for at this very present moment Listen to the sounds surrounding
              you Focus on your breath When you can feel the air and sun on your
              skin slowly start to close your eyes and focus on the sound of the
              beach
            </div> */}
          </div>
          <br></br>
          <div className="timer-display">
            {" "}
            {!state && <div className="timeDisplay">00:00</div>}
            {state && <div className="timeDisplay">{displayTime}</div>}
          </div>
        </div>
        <div className="buttons">
          {/* <button
            onClick={(event) => startMeditation(event, 120)}
            className="two"
          >
            two minutes
          </button> */}
          {/* <button
            onClick={(event) => startMeditation(event, 300)}
            className="five"
          >
            five minutes
          </button> */}
          {/* <button
            onClick={(event) => startMeditation(event, 600)}
            className="ten"
          >
            ten minutes
          </button> */}
        </div>
      </div>
      {/* <audio className="song" src={song}></audio> */}
    </div>
  );
};

export default MeditationForm;
