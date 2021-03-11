
import './App.css';
import Home from './components/Home/Home';
import PlayerDetails from './components/PlayerDetails/PlayerDetails';
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";


function App() {
  return (
    <Router>

      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/teams/:idTeam">
          <PlayerDetails></PlayerDetails>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
