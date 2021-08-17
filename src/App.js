import React from "react";
import "./App.css";
import SnakeGame from "./Page/Snake/SnakeGame";
import Game2048 from "./Page/2048/Game2048";
import Menu from "./Page/Menu/Menu";
import { BrowserRouter as Router, Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route path="/snake">
            <SnakeGame />
          </Route>
          <Route path="/2048">
            <Game2048 />
          </Route>
          <Route path="/">
            <Menu />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
