import React from "react";
import "./App.css";
import SnakeGame from "./component/Snake/SnakeGame";
import Game2048 from "./component/2048/Game2048";

function App() {
  return (
    <div className="app">
      {/* <SnakeGame /> */}
      <Game2048 />
    </div>
  );
}

export default App;
