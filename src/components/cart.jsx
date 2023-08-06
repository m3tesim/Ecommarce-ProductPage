import React, { Component } from "react";
import { ReactComponent as TrashIcon } from "../utils/icons/trash.svg";
import { CartContext } from "./CartItemsProvider";
export default class Cart extends Component {
  render() {
    return (
      <div className="cart-container">
        <div className="triangle"></div>
        <CartContext.Consumer>
          {(context) => {
            return (
              <div className="cart-body">
                <div className="title">My Cart ({context.products.length})</div>

                {context.products.length > 0 ? (
                  <div>
                    <div>
                      {context.products?.map((p, index) => (
                        <CartItem key={index} product={p} />
                      ))}
                    </div>
                    <div className="total">
                      <span>subtotal</span>
                      <span className="red-text">5000 EGP</span>
                    </div>

                    <button className="primary-button">Go To Cart</button>
                  </div>
                ) : (
                  <div>
                    <p>Cart is Empty</p>
                  </div>
                )}
              </div>
            );
          }}
        </CartContext.Consumer>
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
        <span className="gray-text">
          size: {product.size || product.size[0]}
        </span>
        <span className="gray-text">
          color: {product.color[0]["name"] || product.color}
        </span>
        <span className="red-text ">{product.price} EGP</span>
      </div>
      <div className="trash">
        <TrashIcon />
      </div>
    </div>
  );
}
