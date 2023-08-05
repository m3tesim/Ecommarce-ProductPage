import React, { Component } from "react";
import { ReactComponent as ProfileIcon } from "../utils/icons/profile.svg";
import { ReactComponent as SearchIcon } from "../utils/icons/search.svg";
import { ReactComponent as CartIcon } from "../utils/icons/shopping-cart.svg";
import Cart from "./cart";
const headers = [
  "Products",
  "Best Seller",
  "New Arrival",
  "About Us",
  "Contact Us",
];

class NavBar extends Component {
  state = {
    dropDown: false,
  };

  componentDidMount() {
    document.addEventListener("click", this.handleClickOutside, true);
  }
  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside, true);
  }

  wrapper = React.createRef();

  handleClickOutside = (event) => {
    if (!this.wrapper.current || !this.wrapper.current.contains(event.target)) {
      this.setState({
        dropDown: false,
      });
    }
  };

  dropDown = (value) => {
    this.setState({ dropDown: value });
  };
  render() {
    return (
      <div className="nav-container">
        <div className="headers">
          <img height={52} src="/images/logo.png" alt="LOGO" />
          <ul>
            {headers.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
        <div className="nav-icons" ref={this.wrapper}>
          <div className="icon">
            <SearchIcon />
          </div>
          <div
            onClick={() => this.dropDown(!this.state.dropDown)}
            className="icon cartDown"
          >
            <CartIcon />
          </div>
          {this.state.dropDown && <Cart />}

          <div className="icon">
            <ProfileIcon />
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
