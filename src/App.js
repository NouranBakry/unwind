import React from "react";
import "./App.css";
import QuoteComponent from "./components/QuoteComponent";
import MeditationForm from "./components/MeditatationForm";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/quote">
            <QuoteComponent />
          </Route>
          <Route path="/meditate">
            <MeditationForm />
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
