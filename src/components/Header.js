import React from "react";
import Logo from "./Logo";
import { BrowserRouter, Route, Link } from "react-router-dom";
import {withRouter} from 'react-router';

export default class Header extends React.Component {
  render() {
    return (
        <div className="header-container">
          <div className="header-logo-container">
            <Link to="/"><Logo></Logo></Link>
          </div>
          <nav>
            <ul className="navigation-list">
              <li className="navigation-list-item">Developers</li>
              <li className="navigation-list-item">Company</li>
              <li className="navigation-list-item">Pricing</li>
            </ul>
          </nav>
          <div className="sign-in-nav-link">
            <Link to="/sign-in">Sign In</Link>
          </div>
        </div>
    );
  }
}
