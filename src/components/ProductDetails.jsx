import React, { Component } from "react";
import { ReactComponent as Star } from "../utils/icons/star.svg";
import { ReactComponent as Heart } from "../utils/icons/heart.svg";
import { ReactComponent as Video } from "../utils/icons/video.svg";
import { ReactComponent as Share } from "../utils/icons/share.svg";
import { ReactComponent as Hover } from "../utils/icons/hover.svg";
import { CartContext } from "./CartItemsProvider";
class ProductDetails extends Component {
  state = {
    size: null,
    color: null,
    count: 1,
  };
  itemCount = (value) => {
    if (value > 0) this.setState({ count: this.state.count + 1 });
    if (value < 0 && this.state.count > 1)
      this.setState({ count: this.state.count - 1 });
  };
  handelSize = (size) => {
    this.setState({ size });
  };
  handelColor = (color) => {
    this.setState({ color });
  };
  handleAddToCart = (contextCallBack) => {
    let product = { ...this.props.product };
    product.size = this.state.size;
    product.color = this.state.color;
    contextCallBack(product);
    this.setState({ color: null, size: null });
  };
  render() {
    console.log(this.state.size);
    const { product } = this.props;

    const stars = [];
    for (let i = 0; i < product?.rating; i++) {
      stars.push(<Star />);
    }
    return (
      <section className="product-details container">
        <div className="gallery">
          <div className="side-images">
            {product?.sideImages?.map((i, index) => (
              <img className="side-img" key={index} src={i} alt="product" />
            ))}
          </div>
          <img className="main-img" src={product.imgURL} alt="product" />
        </div>
        <div className="product-info">
          <div className="header">
            <div>
              <span className="title">{product.name}</span>
              <div>
                {" "}
                {stars.map((i, index) => (
                  <span key={index}>{i}</span>
                ))}
              </div>
            </div>
            <div className="hover-label">
              <Hover />
            </div>
          </div>
          <div className="price">
            {product.price} EGP
            <span className="old-price"> {product.price} EGP</span>
          </div>
          <div className="description ">{product.description}</div>
          <span className="red-text">size</span>
          <div className="size-container">
            {product?.size?.map((i, index) => (
              <span
                className={`size-label ${this.state.size === i && "checked"} `}
                key={index}
                onClick={() => this.handelSize(i)}
              >
                {i}
              </span>
            ))}
          </div>
          <span className="red-text">color</span>
          <div className="colors-container">
            {product?.color?.map((i, index) => {
              const border = i.value === "#FFFFFF" ? "border" : "";
              return (
                <span
                  onClick={() => this.handelColor(i.name)}
                  className={` color-label  ${
                    this.state.color === i.name && "checked"
                  } ${border}`}
                  style={{ backgroundColor: i["value"] }}
                  key={index}
                ></span>
              );
            })}
          </div>
          <div className="buttons-container">
            <div className="count-label">
              <span onClick={() => this.itemCount(-1)}>&#65293;</span>
              <span>{this.state.count}</span>
              <span onClick={() => this.itemCount(1)}>&#65291;</span>
            </div>
            <CartContext.Consumer>
              {(context) => (
                <button
                  onClick={() => this.handleAddToCart(context.add)}
                  className="primary-button"
                  disabled={!(this.state.size && this.state.color)}
                >
                  Buy Now
                </button>
              )}
            </CartContext.Consumer>
          </div>
          <div className="icons">
            <div>
              <span className="icon">
                <Heart />
              </span>
              add to wishlist
            </div>

            <div>
              <span className="icon">
                <Video />
              </span>
              video call
            </div>

            <div>
              <span>
                <Share />
              </span>
              share
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ProductDetails;
