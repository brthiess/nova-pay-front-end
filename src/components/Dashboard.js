import React from "react";
import DashboardHeader from "./DashboardHeader";

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard-container">
          <DashboardHeader></DashboardHeader>
      </div>
    );
  }
}
