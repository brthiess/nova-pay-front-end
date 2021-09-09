import React from "react";

export default class BelowTheFold extends React.Component {
  render() {
    return (
      <div className="below-the-fold-container">
        <div className="below-the-fold-sub-container">
          <ul className="features-list">
            <li className="features-list-item">
              <span className="feature-icon">
                <i className="fa fa-lock"></i>
              </span>
              <span className="feature-main-point">Secure</span>
              <span className="features-list-item-text">
                No fees to accept payment
              </span>
            </li>
            <li className="features-list-item">
              <span className="feature-icon">
                <i className="fa fa-thumbs-up"></i>
              </span>
              <span className="feature-main-point">Simple</span>
              <span className="features-list-item-text">
                Completely open source and transparent
              </span>
            </li>
            <li className="features-list-item">
              <span className="feature-icon">
                <i className="fa fa-credit-card"></i>
              </span>
              <span className="feature-main-point">Accepts many payments</span>
              <span className="features-list-item-text">
                Easy to start using for merchants
              </span>
            </li>
          </ul>
        </div>
        <div className="below-the-fold-sub-container-2">
          <h3 className="cta-title">Ready to get started?</h3>
          <p className="cta-text">
            Explore Nova Pay, or create an account instantly and start
            accepting payments.
          </p>
          <a className="cta-button" href="/sign-up">Start Now <i className="fa fa-angle-right"></i></a>
        </div>
      </div>
    );
  }
}
