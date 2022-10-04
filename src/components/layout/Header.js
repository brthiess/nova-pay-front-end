import React from "react";
import { connect } from "react-redux";
import GuestHeader from "./GuestHeader";
import DashboardHeader from "../dashboard/DashboardHeader";

class Header extends React.Component {
  render() {
    return (
      <div className="header-container-container">
        {this.props.onDashboard ? (
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
    onDashboard: state.onDashboard,
  };
};

export default connect(mapStateToProps)(Header);
