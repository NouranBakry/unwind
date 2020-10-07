import React from "react";
import "./App.css";
import Form from "./components/Form";
import MeditationForm from "./components/MeditatationForm";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Nav></Nav>
        <Form></Form>
        <Switch>
          <Route path="/meditate" component={MeditationForm}></Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
