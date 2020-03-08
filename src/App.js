import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Player from "./components/Player";
import Computer from "./components/Computer";

function App() {
  return (
    <div className="App">
      <Computer />
      <Player />
    </div>
  );
}

export default App;
