import React from "react";
import Logo from "./Logo";

export default class AboveTheFold extends React.Component {
  render() {
    return (
      <div className="above-the-fold-container">
        <div className="above-the-fold-sub-container">
          <Logo color="white"></Logo>
          <div className="home-description">
            <p className="home-description-text">
              NovaPay is a payment processing platform for Stellar to help
              merchants accept and pay with Stellar Lumens
            </p>
          </div>
          <ul className="home-advantages-list">
            <li className="home-advantages-list-item">
              <span className="main-point">Free</span>
              <span className="home-advantages-list-item-text">
                No fees to accept payment
              </span>
            </li>
            <li className="home-advantages-list-item">
              <span className="main-point">Open Source</span>
              <span className="home-advantages-list-item-text">
                Completely open source and transparent
              </span>
            </li>
            <li className="home-advantages-list-item">
              <span className="main-point">Easy setup</span>
              <span className="home-advantages-list-item-text">
                Easy to start using for merchants
              </span>
            </li>
          </ul>
          <div className="learn-more-container">
            <a href="/learn-more">Learn more</a>
          </div>
        </div>
      </div>
    );
  }
}
