import React from "react";
import Player from "./components/Player";
import Computer from "./components/Computer";

function App() {
  return (
    <div className="App">
      <Player limitNumber={5} maxNumber={50} />
      <Computer />
    </div>
  );
}

export default App;
