import React from "react";
import DashboardBanner from "./DashboardBanner";
import Merchants from "./Merchants";
import Account from "./Account";
import store from "../../app/store";
import styles from "../styles/Dashboard.module.css";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Merchant from "./Merchant";

export default function Dashboard() {
  store.dispatch({ type: "navigation/onDashboard", payload: true });
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path } = useRouteMatch();

  return (
    <div className={styles.dashboardContainer}>
      <Switch>
        <Route exact path={path} component={DashboardBanner}></Route>
        <Route exact path={`${path}merchants`} component={Merchants}></Route>
        <Route exact path={`${path}account`} component={Account}></Route>
        <Route
          path={`${path}merchants/:merchantId`}
          component={Merchant}
        ></Route>
      </Switch>
    </div>
  );
}
