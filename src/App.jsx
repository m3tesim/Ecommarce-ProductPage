import "./App.scss";

import React, { Component } from "react";
import NavBar from "./components/NavBar";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <h1>Hello, world!</h1>
      </>
    );
  }
}

export default App;
