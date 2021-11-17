import React from "react";
import { connect } from "react-redux";
import Logo from "../Logo";
import { Link } from "react-router-dom";

class DashboardHeader extends React.Component {
  render() {
    return (
      <div className="header-container">
        <div className="header-logo-container">
          <Link to="/">
            <Logo></Logo>
          </Link>
        </div>
        <nav>
          <ul className="navigation-list">
            <li className="navigation-list-item">Payments</li>
            <li className="navigation-list-item">Merchants</li>
            <li className="navigation-list-item">Reports</li>
          </ul>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.email,
  };
};

export default connect(mapStateToProps)(DashboardHeader);
