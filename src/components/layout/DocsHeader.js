import React from "react";
import Logo from "../Logo";
import { Link } from "react-router-dom";

export default class DocsHeader extends React.Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-logo-container">
          <Link to="/">
            <Logo></Logo>
          </Link>
        </div>
      </div>
    );
  }
}
