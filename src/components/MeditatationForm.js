import React from "react";
import "./MeditationForm.css";
import song from "../resources/beach.mp3";

const MeditationForm = () => {
  // const [time, setTime] = useState();
  // const [timeState, setTimeState] = useState();
  // const [displayTimer, setDisplayTimer] = useState();
  // useEffect(() => {});

  const startMeditation = (event) => {
    event.preventDefault();
    // setTimeState(true);
    // setTime(time);
    const song = document.getElementsByClassName("song")[0];
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
          <div className="Message">
            close your eyes and focus on your breath{" "}
          </div>
        {/* <div className="timeDisplay">{displayTimer}</div> */}
        <audio className="song" src={song}></audio>
      </div>
    </form>
  );
};

export default MeditationForm;
