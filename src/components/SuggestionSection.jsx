import React, { Component } from "react";
import ProductCard from "../components/productCard.jsx";
import { products } from "../utils/services/data";
import Slider from "react-slick";

export default class SuggestionSection extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    return (
      <section className="suggest-section container">
        <h2>you may also like</h2>
        <div className="card-container">
          <Slider {...settings}>
            {products.map((i, index) => (
              <ProductCard product={i} key={index} />
            ))}
          </Slider>
        </div>
      </section>
    );
  }
}
