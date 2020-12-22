import React from "react";
import "./MeditationForm.css";
// import song from "../resources/beach.mp3";
import { Link } from "react-router-dom";

const MeditationForm = () => {
  // const [state, setState] = useState(false);
  // const [currentTime, setCurrentTime] = useState();
  // const [displayTime, setDisplayTime] = useState();

  // useEffect(() => {
  //   let seconds = currentTime % 60;
  //   seconds = seconds === 0 ? "00" : seconds;
  //   seconds = seconds !== "00" && seconds < 10 ? `0${seconds}` : seconds;
  //   let displayTime = `${Math.floor(currentTime / 60)}:${seconds}`;
  //   setDisplayTime(displayTime);
  //   setCurrentTime(currentTime - 1);
  //   if (currentTime === 0) {
  //     setState(false);
  //   }
  //   return () => {};
  // }, [currentTime]);
  // const startMeditation = (event, time) => {
  //   event.preventDefault();
  //   const song = document.getElementsByClassName("song")[0];
  //   setState(!state);
  //   setCurrentTime(time);
  //   song.play();
  // };

  return (
    <div className="container">
    <div className="header-container">
      <div className="Title">Get Ready to start meditating</div>
      <div>
        {" "}
        <p className="Message">
          Take a Deep Breath Breath in through your nose and out through your
          mouth Imagine yourself lying on warm sunny beach watching the waves
          and the birds flying Remember everything you are grateful for at this
          very present moment Listen to the sounds surrounding you Focus on your
          breath When you can feel the air and sun on your skin slowly start to
          close your eyes and focus on the sound of the beach
        </p>
    </div>
      </div>
      <div className="buttons">
        <button className="two" >
          2 mins
        </button>
        <button className="five">
          5 Mins
        </button>
        <button className="ten">
          10 Mins
        </button>
      </div>
      <div className="player"></div>
      <div className='toggler'>
              <button className="Background-Button">Get Today’s Background</button>
      <Link to="home">
        <button className="homeButton">Home</button>
      </Link>
      </div>

      {/* {state && <div className="timeDisplay">{displayTime}</div>} */}
      {/* <audio className="song" src={song}></audio> */}
    </div>
  );
};

export default MeditationForm;
