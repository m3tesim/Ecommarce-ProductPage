import React, { Component } from "react";

export default class intro extends Component {
  handleRoute = () => {
    // Access the history object from props
    window.location.assign("/product");
  };

  render() {
    setTimeout(this.handleRoute, 2000);

    return (
      <div className="intro-container">
        <div className="logo-intro">
          <img src="/images/logo.png" alt="LOGO" />
        </div>
        <div className="bar-container">
          <div className="progress2 progress-moved">
            <div className="progress-bar2"></div>
          </div>
        </div>
      </div>
    );
  }
}
