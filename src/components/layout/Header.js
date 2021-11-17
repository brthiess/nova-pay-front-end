import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import GuestHeader from "./GuestHeader";
import DashboardHeader from "../dashboard/DashboardHeader";

function UserInfoSignedOut() {
  return <Link to="/sign-in">Sign In</Link>;
}

function UserInfoSignedIn(props) {
  return <p>{props.email}</p>;
}

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        {this.props.showDashboardHeader ? (
          <DashboardHeader></DashboardHeader>
          
        ) : (
          <GuestHeader></GuestHeader>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    email: state.email,
    showDashboardHeader: state.showDashboardHeader
  };
};

export default connect(mapStateToProps)(Header);
