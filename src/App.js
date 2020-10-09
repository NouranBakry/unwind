import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import MeditationForm from "./components/MeditatationForm";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [image, setImage] = useState("");
  const [backgroundState, setBackgroundState] = useState();
  function onBackgroundChange(newBackgroundState) {
    setBackgroundState(newBackgroundState);
  }
  useEffect(() => {
    fetch("https://source.unsplash.com/1600x900/daily?water").then((data) => {
      setImage(data.url);
    });
    return () => {};
  }, []);
  return (
    <Router>
      <div
        style={
          backgroundState
            ? { backgroundImage: `url(` + image + `)` }
            : { backgroundImage: "none"}
        }
        className="App"
      >
        <Nav></Nav>
        <Form></Form>
        <Switch>
          <Route
            path="/meditate"
            render={(backgroundState) => (
              <MeditationForm
                backgroundState={backgroundState}
                onChange={onBackgroundChange}
              />
            )}
          ></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
