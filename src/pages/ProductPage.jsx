import React, { Component } from "react";
import SuggestionSection from "../components/SuggestionSection";
import ProductDetails from "../components/ProductDetails";
import { currentProduct } from "../utils/services/data";
class ProductPage extends Component {
  render() {
    return (
      <div>
        <div>ProductPage</div>

        <ProductDetails product={currentProduct} />
        <SuggestionSection />
      </div>
    );
  }
}

export default ProductPage;
