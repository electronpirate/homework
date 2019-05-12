import React from 'react';
import Board from './components/Board'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Home from "./components/Home";

import './main.css';

function App() {
  return (
    <Router>
      <React.Fragment>
        <NavBar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/board" component={Board} />

        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
