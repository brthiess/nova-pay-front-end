import React from "react";
import { Link } from "react-router-dom";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container">
        <div className="copyright">
          &copy; NovaPay {new Date().getFullYear()}
        </div>
        <nav>
          <ul className="footer-navigation-list">
            <Link className="footer-navigation-list-item" to="/docs/">
              Developers
            </Link>
            <Link className="footer-navigation-list-item" to="/company/">
              Company
            </Link>
            <Link className="footer-navigation-list-item" to="/pricing/">
              Pricing
            </Link>
          </ul>
        </nav>
      </div>
    );
  }
}
