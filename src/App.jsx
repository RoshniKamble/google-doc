import React from "react";
import "@material-tailwind/react/tailwind.css";


// importing react router dom
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


// importing pages
import Home from "./pages/Home";
import Editor from "./pages/Editor";

const App = () => {

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/:doc" component={Editor} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
