import React, {useState, useEffect} from "react";
import "./MeditationForm.css";
import song from "../resources/beach.mp3";

const MeditationForm = () => {
  const [state, setState] = useState(false);
  const [currentTime, setCurrentTime] = useState();
  const [displayTime, setDisplayTime] = useState();
  useEffect(()=>{
    if(state && currentTime > 0){
      let seconds = currentTime % 60;
      seconds = (seconds ===0)? '00': seconds;
      seconds = (seconds !== '00' && seconds < 10) ? `0${seconds}`: seconds;
      let displayTime = `${Math.floor(currentTime/60)}:{seconds}`;
      setCurrentTime(previousValue => {previousValue-1});
      setDisplayTime(displayTime);
    }
    if(currentTime === 0){
      setState(false);
    }
    return()=>{};
  }, [])
    const startMeditation = (event) => {
    event.preventDefault();
    const song = document.getElementsByClassName("song")[0];
    setState(true);
    song.play();
  };
  return (
    <form className="MeditaionForm">
      <div>
        <br></br>
        <br></br>
        <button
          className="two"
          data-time="120"
          onClick={(e) => {
            startMeditation(e);
          }}
        >
          2 mins
        </button>
        <br></br>
        <br></br>
        <button
          className="five"
          data-time="300"
          onClick={(e) => {
            startMeditation(e);
          }}
        >
          5 Mins
        </button>
        <br></br>
        <br></br>
        <button
          className="ten"
          data-time="600"
          onClick={(e) => {
            startMeditation(e);
          }}
        >
          10 Mins
        </button>
        <br></br>
        <br></br>
        <div className="Message">close your eyes and focus on your breath </div>
        {/* <div className="timeDisplay">{displayTimer}</div> */}
        <audio className="song" src={song}></audio>
      </div>
    </form>
  );
};

export default MeditationForm;
