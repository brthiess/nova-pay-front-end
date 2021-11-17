import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer-container">
        <div className="copyright">
          &copy; NovaPay {new Date().getFullYear()}
        </div>
        <nav>
          <ul className="footer-navigation-list">
            <li className="footer-navigation-list-item">Developers</li>
            <li className="footer-navigation-list-item">Company</li>
            <li className="footer-navigation-list-item">Pricing</li>
          </ul>
        </nav>
      </div>
    );
  }
}
