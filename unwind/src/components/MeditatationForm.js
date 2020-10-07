import React from "react";
import GetImageFromAPI from "../GetImageFromAPI";

const MeditationForm = () => {
  return (
    <form className="MeditaionForm">
      <div
        className="container"
        style={GetImageFromAPI ? { background: GetImageFromAPI } : {}}
      >
        <header className="title">
          Unwind{" "}
          <span role="img" aria-label="lotus">
            🧘‍♀️
          </span>
        </header>
        <button className="five" type="button">
          5 Mins
        </button>
        <button className="ten" type="button">
          10 Mins
        </button>
      </div>
    </form>
  );
};

export default MeditationForm;
