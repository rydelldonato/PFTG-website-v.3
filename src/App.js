import "./App.css";
import Home from "./components/home/home";
import React from "react";
import {
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
