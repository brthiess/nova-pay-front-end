import React from "react";
import { connect } from 'react-redux'
import styles from "../styles/Dashboard.module.css";

class DashboardHeader extends React.Component {
    render() {
        return (
            <div className={styles.dashboardBannerContainer}>
                {"Welcome " + this.props.email}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
      email: state.email
    }
  }
  
  export default connect(mapStateToProps)(DashboardHeader)