import React from "react";

const MeditationForm = () => {
  return (
    <form className="MeditaionForm">
      {/* <header className="title"></header> */}
      <button className="five" type="button">
        5 Mins
      </button>
      <button className="ten" type="button">
        10 Mins
      </button>
    </form>
  );
};

export default MeditationForm;
