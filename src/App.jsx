import "./styles/App.scss";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import ProductPage from "./pages/ProductPage";
import { CartItemProvider } from "./components/CartItemsProvider";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./pages/intro";
class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Routes>
            <Route path="/" element={<Intro />}></Route>
            <Route
              path="/product"
              element={
                <CartItemProvider>
                  <NavBar />
                  <ProductPage />
                </CartItemProvider>
              }
            ></Route>
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
