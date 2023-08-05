import item1 from "../images/item1.png";
import item2 from "../images/item2.png";
import item3 from "../images/item3.png";
import item4 from "../images/item4.png";
import item5 from "../images/item5.png";
import productImage1 from "../images/productimages1.png";
import productImage2 from "../images/productimages2.png";
import productImage3 from "../images/productimages3.png";

export const currentProduct = {
  name: "Product Name",
  price: 3000,
  description:
    "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
  rating: 3,
  imgURL: item1,
  sideImages: [item1, productImage1, productImage2, productImage3],
  size: ["2*3M", "4*3M", "4*4M"],
  color: [
    { name: "white", value: "#FFFFFF" },
    { name: "black ", value: "#000000" },
    { name: "blue", value: "#0052D3" },
    { name: "yellow", value: "#FCBC04" },
  ],
};

export const products = [
  {
    name: "Product Name",
    price: 3000,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    rating: 3,
    imgURL: item2,
    size: ["2*3M", "4*3M", "4*4M"],
    color: [
      { name: "white", value: "#FFFFFF" },
      { name: "black ", value: "#000000" },
      { name: "blue", value: "#0052D3" },
      { name: "yellow", value: "#FCBC04" },
    ],
  },
  {
    name: "Product Name",
    price: 300,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    rating: 4,
    imgURL: item3,
    size: ["2*3M", "4*3M", "4*4M"],
    color: [
      { name: "white", value: "#FFFFFF" },
      { name: "black ", value: "#000000" },
      { name: "blue", value: "#0052D3" },
      { name: "yellow", value: "#FCBC04" },
    ],
  },
  {
    name: "Product Name",
    price: 350,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    rating: 5,
    imgURL: item4,
    size: ["2*3M", "4*3M", "4*4M"],
    color: [
      { name: "white", value: "#FFFFFF" },
      { name: "black ", value: "#000000" },
      { name: "blue", value: "#0052D3" },
      { name: "yellow", value: "#FCBC04" },
    ],
  },
  {
    name: "Product Name",
    price: 350,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley",
    rating: 2,
    imgURL: item5,
    size: ["2*3M", "4*3M", "4*4M"],
    color: [
      { name: "white", value: "#FFFFFF" },
      { name: "black ", value: "#000000" },
      { name: "blue", value: "#0052D3" },
      { name: "yellow", value: "#FCBC04" },
    ],
  },
];
