import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Usurvey from "./Usurvey";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </header>
        <Usurvey />
      </div>
    );
  }
}

export default App;
