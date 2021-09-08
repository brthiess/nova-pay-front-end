import React from "react";
import Logo from "./Logo";

export default class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-logo-container">
          <Logo></Logo>
        </div>
        <nav>
          <ul className="navigation-list">
            <li className="navigation-list-item">Developers</li>
            <li className="navigation-list-item">Company</li>
            <li className="navigation-list-item">Pricing</li>
          </ul>
        </nav>
      </div>
    );
  }
}
