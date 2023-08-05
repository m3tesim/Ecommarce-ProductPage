import "./styles/App.scss";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import ProductPage from "./pages/ProductPage";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <ProductPage />
      </>
    );
  }
}

export default App;
