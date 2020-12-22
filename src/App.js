import React from "react";
import "./App.css";
import FortuneCookie from "./components/FortuneCookie";
import MeditationForm from "./components/MeditatationForm";
import Home from "./components/Home";
import ReactGA from "react-ga"; //Google Analytics
import { createBrowserHistory } from "history";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
// import background from "./resources/background.png";

const App = () => {
  // const [image, setImage] = useState("");
  // const [backgroundState, setBackgroundState] = useState(false);
  // function onBackgroundChange(newBackgroundState) {
  //   setBackgroundState(newBackgroundState);
  // }
  const history = createBrowserHistory();
  // Initialize google analytics page view tracking
  history.listen((location) => {
    ReactGA.initialize("UA-180241240-1");
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  });

  // useEffect(() => {
  //   fetch("https://source.unsplash.com/1600x900/daily?water").then((data) => {
  //     setImage(data.url);
  //   });
  //   return () => {};
  // }, []);
  return (
    <Router history={history}>
      <div
        // style={
        //   backgroundState
        //     ? { backgroundImage: `url(` + image + `)` }
        //     : { backgroundImage: { background } }
        // }
        className="App"
      >
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <FortuneCookie />
          </Route>
          <Route path="/meditate">
            <MeditationForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
