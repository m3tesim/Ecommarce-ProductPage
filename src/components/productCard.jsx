import React from "react";
import { ReactComponent as Heart } from "../utils/icons/heart.svg";
import { ReactComponent as Star } from "../utils/icons/star.svg";
import { ReactComponent as Hover } from "../utils/icons/hover.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function ProductCard(props) {
  const { product } = props;

  const stars = [];
  for (let i = 0; i < product?.rating; i++) {
    stars.push(<Star />);
  }

  return (
    <div className="card">
      <div className="hover-icon">
        <Hover />
      </div>
      <div className="img-container">
        <LazyLoadImage
          alt={"product"}
          src={product?.imgURL} // use normal <img> attributes as props
        />
      </div>
      <p className="title"> {product?.name}</p>
      <p className="description">{product?.description}</p>
      <div>
        {stars.map((i, index) => (
          <span key={index}>{i}</span>
        ))}
      </div>
      <p className="price">{product?.price} EGP</p>

      <div className="card-buttons">
        <button className="primary-button">add to cart</button>
        <div className="heart-icon">
          <Heart />
        </div>
      </div>
    </div>
  );
}
