import React, { Component } from "react";
import ProductCard from "../components/productCard.jsx";
import { products } from "../utils/services/data";
export default class SuggestionSection extends Component {
  render() {
    return (
      <section className="suggest-section">
        <h2>you may also like</h2>
        <div className="card-container">
          {products.map((i) => (
            <ProductCard product={i} />
          ))}
        </div>
      </section>
    );
  }
}
