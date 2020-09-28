import React from "react";
import "./App.css";
import Form from "./components/Form";
import QuotesAPI from "./QuotesAPI";

const App = () => {
  return (
    <div className="App">
      <Form />
      <QuotesAPI /> 
    </div>
  );
};

export default App;
