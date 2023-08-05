import React, { Component } from "react";
import { products } from "../utils/services/data";
import { ReactComponent as TrashIcon } from "../utils/icons/trash.svg";

export default class Cart extends Component {
  render() {
    return (
      <div className="cart-container">
        <div className="triangle"></div>
        <div className="cart-body">
          <div className="title">My Cart (4)</div>
          <div>
            {products.map((p) => (
              <CartItem product={p} />
            ))}
          </div>
          <div className="total">
            <span>subtotal</span>
            <span className="red-text">5000 EGP</span>
          </div>

          <button className="primary-button">Go To Cart</button>
        </div>
      </div>
    );
  }
}

function CartItem(props) {
  const { product } = props;
  return (
    <div className="cart-item">
      <div>
        <img src={product.imgURL} alt="product" />
      </div>
      <div className="info">
        <span className="name"> {product.name}</span>
        <span className="gray-text">size: {product.size[0]}</span>
        <span className="gray-text">color: {product.color[0]}</span>
        <span className="red-text ">{product.price} EGP</span>
      </div>
      <div className="trash">
        <TrashIcon />
      </div>
    </div>
  );
}
