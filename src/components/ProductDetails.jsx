import React, { Component } from "react";
import { ReactComponent as Star } from "../utils/icons/star.svg";
import { ReactComponent as Heart } from "../utils/icons/heart.svg";
import { ReactComponent as Video } from "../utils/icons/video.svg";
import { ReactComponent as Share } from "../utils/icons/share.svg";

class ProductDetails extends Component {
  render() {
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
          <div>
            <h1>{product.name}</h1>

            {stars.map((i, index) => (
              <span key={index}>{i}</span>
            ))}
          </div>
          <div className="price">
            {product.price} EGP
            <span className="old-price"> {product.price} EGP</span>
          </div>
          <div className="description ">{product.description}</div>
          <p className="red-text">size</p>
          <div className="size-container">
            {product?.size?.map((i, index) => (
              <span className="size-label" key={index}>
                {i}
              </span>
            ))}
          </div>
          <p className="red-text">color</p>
          <div className="colors-container">
            {product?.color?.map((i, index) => {
              const border = i.value === "#FFFFFF" ? "border" : "";
              return (
                <span
                  className={` color-label ${border}`}
                  style={{ backgroundColor: i["value"] }}
                  key={index}
                ></span>
              );
            })}
          </div>
          <div>
            <button className="primary-button">Add To Cart</button>
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
