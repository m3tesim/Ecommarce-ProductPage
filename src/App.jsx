import "./styles/App.scss";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import ProductPage from "./pages/ProductPage";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <h1>Hello, world!</h1>
        <ProductPage />
      </>
    );
  }
}

export default App;
