import React from "react";
import { connect } from "react-redux";
import Logo from "../Logo";
import { Link } from "react-router-dom";
import styles from "../styles/Dashboard.module.css";

class DashboardHeader extends React.Component {
  render() {
    return (
      <div className={"header-container " + styles.dashboardHeaderContainer}>
        <div className="header-logo-container">
          <Link to="/">
            <Logo color="white"></Logo>
          </Link>
        </div>
        <nav>
          <ul className={"navigation-list " + styles.navigationList}>
          <li className={"navigation-list-item " + styles.navigationListItem}>
              <Link to="/dashboard"
                className={styles.navigationListItemLink}
              >
                Home
              </Link>
            </li>
            <li className={"navigation-list-item " + styles.navigationListItem}>
              <Link to="/dashboard/merchants"
                className={styles.navigationListItemLink}
              >
                Merchants
              </Link>
            </li>
            <li className={"navigation-list-item " + styles.navigationListItem}>
            <Link to="/dashboard/reports"
                className={styles.navigationListItemLink}
              >
                Reports
              </Link>
            </li>
            <li className={"navigation-list-item " + styles.navigationListItem}>
            <Link to="/dashboard/account"
                className={styles.navigationListItemLink}
              >
                Account
              </Link>
            </li>
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
