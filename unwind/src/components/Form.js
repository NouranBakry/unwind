import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import MeditationForm from "./MeditatationForm";
import "./Form.css";
import GetQuotesAPI from "../GetQuoteFromAPI";
import GetImageFromAPI from "../GetImageFromAPI";

class Form extends Component {
  constructor(props) {
    super();
    this.state = {
      visible: false,
    };
    this.getTodayFortuneCookie = this.getTodayFortuneCookie.bind(this);
    this.getMeditationPage = this.getMeditationPage.bind(this);
  }
  getTodayFortuneCookie() {
    this.setState({ visible: true });
  }

  render() {
    const displayQuote = this.state.visible;
    let quote = null;
    if (displayQuote) {
      quote = <GetQuotesAPI />;
    }
    return (
      <form className="Form">
        <div
          className="container"
          style={{ GetImageFromAPI } ? { background: { GetImageFromAPI } } : {}}
        >
          {" "}
          <header className="title"></header>
          <header className="title">Unwind</header>
          <button>Start Relaxing Meditation</button> <br></br>
          <br></br>
          <button onClick={this.getTodayFortuneCookie}>
            Today's Fortune Cookie 🍪
          </button>
          {quote}
        </div>
      </form>
    );
  }
}

export default Form;
