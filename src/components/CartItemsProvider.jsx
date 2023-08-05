import React from "react";
import { currentProduct } from "../utils/services/data";
// Create a new context
const CartContext = React.createContext();

class CartItemProvider extends React.Component {
  state = {
    products: [currentProduct],
  };

  addProduct = (product) => {
    this.setState({
      products: [...this.state.products, product],
    });
  };
  render() {
    // Define the value to be passed down to consuming components
    const context = {
      products: this.state.products,
      add: this.addProduct,
    };

    return (
      <CartContext.Provider value={context}>
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

export { CartContext, CartItemProvider };
