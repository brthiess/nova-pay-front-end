import React from "react";
import DashboardBanner from "./DashboardBanner";
import store from "../../app/store";

export default class Dashboard extends React.Component {
  componentDidMount() {
    store.dispatch({ type: "header/showDashboardHeader", payload: true });
  }
  render() {
    return (
      <div className="dashboard-container">
        <DashboardBanner></DashboardBanner>
      </div>
    );
  }
}
