import React from "react";

export default class BelowTheFold extends React.Component {
  render() {
    return (
      <div className="below-the-fold-container">
        <div className="below-the-fold-sub-container">
          <ul className="features-list">
            <li className="features-list-item">
              <span className="main-point">Secure</span>
              <span className="features-list-item-text">
                No fees to accept payment
              </span>
            </li>
            <li className="features-list-item">
              <span className="main-point">Simple</span>
              <span className="features-list-item-text">
                Completely open source and transparent
              </span>
            </li>
            <li className="features-list-item">
              <span className="main-point">Accepts many payments</span>
              <span className="features-list-item-text">
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
