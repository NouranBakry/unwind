import React, { Component } from "react";
import MeditationForm from "./MeditatationForm";
import "./Form.css";
import GetQuotesAPI from "../GetQuoteFromAPI";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
    };
    this.getTodayFortuneCookie = this.getTodayFortuneCookie.bind(this);
  }
  getTodayFortuneCookie() {
    this.setState({ visible: true });
  }

  render() {
    const displayQuote = this.state.visible;
    let quote = null;
    if (displayQuote) {
      quote = <GetQuotesAPI/>;
    }
    return (
      <form className="Form">
        <div>
          <header className="title"></header>
          <header className="title">
            Unwind{" "}
            <span role="img" aria-label="lotus">
              🧘‍♀️
            </span>
          </header>
          <br></br>
          <br></br>
          <button
            className="meditationButton"
            onClick={() => {
              window.open(MeditationForm);
            }}
          >
            Start Relaxing Meditation
          </button>{" "}
          <br></br>
          <br></br>
          <button className="quoteButton" onClick={this.getTodayFortuneCookie}>
            Today's Fortune Cookie{" "}
            <span role="img" aria-label="cookie">
              🍪
            </span>
          </button>
          <br></br>
          <br></br>
          <div>{quote}</div>
        </div>
      </form>
    );
  }
}

export default Form;
