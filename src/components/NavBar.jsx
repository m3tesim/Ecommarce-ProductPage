import React from "react";
import { ReactComponent as ProfileIcon } from "../utils/icons/profile.svg";
import { ReactComponent as SearchIcon } from "../utils/icons/search.svg";
import { ReactComponent as CartIcon } from "../utils/icons/shopping-cart.svg";

const headers = [
  "Products",
  "Best Seller",
  "New Arrival",
  "About Us",
  "Contact Us",
];

export default function NavBar() {
  return (
    <div className="nav-container">
      <div className="headers">
        <img height={52} src="/images/logo.png" alt="LOGO" />
        <ul>
          {headers.map((i) => (
            <li>{i}</li>
          ))}
        </ul>
      </div>
      <div className="nav-icons">
        <div className="icon">
          <SearchIcon />
        </div>
        <div className="icon">
          <CartIcon />
        </div>
        <div className="icon">
          <ProfileIcon />
        </div>
      </div>
    </div>
  );
}
