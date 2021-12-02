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
              <a
                className={styles.navigationListItemLink}
                href="/dashboard/merchants"
              >
                Merchants
              </a>
            </li>
            <li className={"navigation-list-item " + styles.navigationListItem}>
            <a
                className={styles.navigationListItemLink}
                href="/dashboard/reports"
              >
                Reports
              </a>
            </li>
            <li className={"navigation-list-item " + styles.navigationListItem}>
            <a
                className={styles.navigationListItemLink}
                href="/dashboard/account"
              >
                Account
              </a>
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
