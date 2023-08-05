import "./styles/App.scss";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import ProductPage from "./pages/ProductPage";
import { CartItemProvider } from "./components/CartItemsProvider";
class App extends Component {
  render() {
    return (
      <>
        <CartItemProvider>
          <NavBar />
          <ProductPage />
        </CartItemProvider>
      </>
    );
  }
}

export default App;
