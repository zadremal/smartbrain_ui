import React, { Component } from "react";
import "./App.css";
import "flexboxgrid2";
import Mainscreen from "./Mainscreen/Mainscreen";
import Background from "./components/Background/Background";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Background />
        <Mainscreen />
      </div>
    );
  }
}

export default App;
