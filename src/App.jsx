import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/App.scss";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import ProductPage from "./pages/ProductPage";
import { CartItemProvider } from "./components/CartItemsProvider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Intro from "./pages/intro";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/">
              <Intro />
            </Route>
            <Route exact path="/product">
              <CartItemProvider>
                <NavBar />
                <ProductPage />
              </CartItemProvider>
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
